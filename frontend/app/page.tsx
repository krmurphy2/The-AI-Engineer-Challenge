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
  /** Local timestamp captured when the message was added to the transcript. */
  timestamp: string;
};

/**
 * Resolve the backend base URL.
 *
 * - In local dev, point `NEXT_PUBLIC_API_BASE_URL` at `http://localhost:8000`.
 * - On Vercel, leave it empty so the request goes to the same origin and
 *   hits the FastAPI function mounted under `/api/...`.
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

/** Short, HH:MM:SS-style timestamps for the terminal aesthetic. */
function nowTimestamp(): string {
  return new Date().toLocaleTimeString([], { hour12: false });
}

export default function HomePage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Auto-scroll the transcript to the bottom whenever it grows.
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isSending]);

  async function sendMessage(message: string) {
    const trimmed = message.trim();
    if (!trimmed || isSending) return;

    setError(null);
    setInput("");
    setMessages((prev) => [
      ...prev,
      { role: "user", content: trimmed, timestamp: nowTimestamp() },
    ]);
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
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply, timestamp: nowTimestamp() },
      ]);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
    } finally {
      setIsSending(false);
      inputRef.current?.focus();
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4 py-6">
      <SentinelHeader />

      <section
        aria-label="Conversation transcript"
        className="flex flex-1 flex-col overflow-hidden rounded-md border border-sentinel-border bg-sentinel-panel/80 shadow-[0_0_40px_-20px_rgba(0,255,156,0.35)]"
      >
        <TerminalBar />

        <div
          ref={scrollRef}
          className="flex-1 space-y-4 overflow-y-auto p-4 text-sm leading-relaxed"
          aria-live="polite"
        >
          {messages.length === 0 && !isSending && <EmptyState />}

          {messages.map((m, i) => (
            <MessageRow key={i} message={m} />
          ))}

          {isSending && <TypingRow />}
        </div>
      </section>

      {error && (
        <div
          role="alert"
          className="mt-3 rounded border border-sentinel-danger/60 bg-sentinel-danger/10 px-3 py-2 text-sm text-sentinel-danger"
        >
          <span className="opacity-70">[ERROR]</span> {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-4 flex items-stretch gap-2">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <div className="relative flex flex-1 items-center">
          <span
            aria-hidden
            className="pointer-events-none absolute left-3 text-sentinel-accent"
          >
            &gt;
          </span>
          <input
            id="message"
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="enter command... (e.g. 'I'm stressed about a deadline')"
            disabled={isSending}
            autoComplete="off"
            autoFocus
            className="w-full rounded-md border border-sentinel-border bg-sentinel-bg pl-7 pr-3 py-2 text-sentinel-text placeholder:text-sentinel-muted caret-sentinel-accent focus:border-sentinel-accent focus:outline-none focus:ring-1 focus:ring-sentinel-accent disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={isSending || input.trim().length === 0}
          className="rounded-md border border-sentinel-accent/60 bg-sentinel-accent/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-sentinel-accent transition hover:bg-sentinel-accent/20 hover:border-sentinel-accent focus:outline-none focus:ring-1 focus:ring-sentinel-accent disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isSending ? "tx..." : "transmit"}
        </button>
      </form>

      <footer className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-wider text-sentinel-muted">
        <span>
          uplink: <span className="text-sentinel-accent-dim">{API_BASE_URL || "(same-origin)"}</span>/api/chat
        </span>
        <span>build :: sentinel.v1</span>
      </footer>
    </main>
  );
}

function SentinelHeader() {
  return (
    <header className="mb-4 flex items-end justify-between gap-3">
      <div>
        <h1 className="text-xl font-bold tracking-widest text-sentinel-accent">
          SENTINEL
          <span className="ml-2 text-sentinel-muted">::</span>
          <span className="ml-2 text-sentinel-text">secure coaching session</span>
        </h1>
        <p className="mt-1 text-xs text-sentinel-muted">
          mental-coach.exe loaded. ready to scan, patch, and harden your day.
        </p>
      </div>
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-sentinel-accent">
        <span
          aria-hidden
          className="sentinel-blink inline-block h-2 w-2 rounded-full bg-sentinel-accent shadow-[0_0_8px_currentColor]"
        />
        encrypted
      </div>
    </header>
  );
}

/** Fake "title bar" with traffic-light dots, sells the terminal vibe. */
function TerminalBar() {
  return (
    <div className="flex items-center gap-2 border-b border-sentinel-border bg-black/30 px-3 py-2 text-[10px] uppercase tracking-widest text-sentinel-muted">
      <span className="h-2.5 w-2.5 rounded-full bg-sentinel-danger/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
      <span className="h-2.5 w-2.5 rounded-full bg-sentinel-accent/70" />
      <span className="ml-2">/dev/sentinel — tty0</span>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="space-y-1 text-sentinel-muted">
      <p>
        <span className="text-sentinel-accent">sentinel@local</span>:~$ awaiting
        input...
      </p>
      <p className="text-xs">
        tip: try &quot;run a vibe scan&quot; or &quot;patch my motivation&quot;.
      </p>
    </div>
  );
}

function MessageRow({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  const label = isUser ? "[YOU]" : "[SENTINEL]";
  const labelColor = isUser ? "text-sentinel-accent" : "text-sentinel-cyan";

  return (
    <article className="grid grid-cols-[auto_1fr] gap-x-3">
      <div className="flex flex-col items-start pt-0.5 text-[11px] uppercase tracking-wider">
        <span className={labelColor}>{label}</span>
        <span className="text-sentinel-muted">{message.timestamp}</span>
      </div>
      <div
        className={[
          "whitespace-pre-wrap break-words rounded-md border px-3 py-2",
          isUser
            ? "border-sentinel-accent/40 bg-sentinel-accent/5"
            : "border-sentinel-cyan/30 bg-sentinel-cyan/5",
        ].join(" ")}
      >
        {message.content}
      </div>
    </article>
  );
}

/** Animated "typing" indicator with three pulsing dots. */
function TypingRow() {
  return (
    <article className="grid grid-cols-[auto_1fr] gap-x-3">
      <div className="flex flex-col items-start pt-0.5 text-[11px] uppercase tracking-wider">
        <span className="text-sentinel-cyan">[SENTINEL]</span>
        <span className="text-sentinel-muted">scanning...</span>
      </div>
      <div className="flex items-center gap-1 rounded-md border border-sentinel-cyan/30 bg-sentinel-cyan/5 px-3 py-3">
        <Dot delay="0ms" />
        <Dot delay="150ms" />
        <Dot delay="300ms" />
      </div>
    </article>
  );
}

function Dot({ delay }: { delay: string }) {
  return (
    <span
      className="inline-block h-2 w-2 animate-bounce rounded-full bg-sentinel-cyan"
      style={{ animationDelay: delay, animationDuration: "1s" }}
    />
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
