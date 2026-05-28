"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

/**
 * Chat message in the local UI history.
 * The backend is stateless (single-turn `{message} -> {reply}`), so this
 * history exists purely for display.
 */
type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

/**
 * Resolve the backend base URL.
 *
 * - In local dev, point `NEXT_PUBLIC_API_BASE_URL` at `http://localhost:8000`.
 * - On Vercel, leave it empty so the request goes to the same origin and
 *   hits the FastAPI function mounted under `/api/...`.
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export default function HomePage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll the transcript to the bottom whenever it grows.
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isSending]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isSending) return;

    setError(null);
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setIsSending(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!res.ok) {
        const detail = await safeReadError(res);
        throw new Error(detail ?? `Request failed (${res.status})`);
      }

      const data: { reply?: string } = await res.json();
      const reply = data.reply ?? "(empty reply)";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-4 py-6">
      <header className="mb-4">
        <h1 className="text-2xl font-semibold tracking-tight">AI Coach Chat</h1>
        <p className="text-sm text-slate-600">
          A supportive mental coach powered by the AI Engineer Challenge backend.
        </p>
      </header>

      <div
        ref={scrollRef}
        className="flex-1 space-y-3 overflow-y-auto rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
        aria-live="polite"
      >
        {messages.length === 0 && !isSending && (
          <p className="text-sm text-slate-500">
            Say hello to start the conversation.
          </p>
        )}

        {messages.map((m, i) => (
          <MessageBubble key={i} role={m.role} content={m.content} />
        ))}

        {isSending && (
          <MessageBubble
            role="assistant"
            content="Thinking…"
            muted
          />
        )}
      </div>

      {error && (
        <div
          role="alert"
          className="mt-3 rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-800"
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <input
          id="message"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message…"
          disabled={isSending}
          autoComplete="off"
          className="flex-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 disabled:bg-slate-100"
        />
        <button
          type="submit"
          disabled={isSending || input.trim().length === 0}
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {isSending ? "Sending…" : "Send"}
        </button>
      </form>

      <footer className="mt-3 text-xs text-slate-500">
        Backend: <code>{API_BASE_URL || "(same origin)"}/api/chat</code>
      </footer>
    </main>
  );
}

function MessageBubble({
  role,
  content,
  muted,
}: {
  role: ChatMessage["role"];
  content: string;
  muted?: boolean;
}) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-3 py-2 text-sm shadow-sm",
          isUser
            ? "bg-slate-900 text-white"
            : "bg-slate-100 text-slate-900 border border-slate-200",
          muted ? "italic opacity-70" : "",
        ].join(" ")}
      >
        {content}
      </div>
    </div>
  );
}

/** Best-effort extraction of an error message from a non-OK response. */
async function safeReadError(res: Response): Promise<string | null> {
  try {
    const data = await res.json();
    if (typeof data?.detail === "string") return data.detail;
    return JSON.stringify(data);
  } catch {
    try {
      return await res.text();
    } catch {
      return null;
    }
  }
}
