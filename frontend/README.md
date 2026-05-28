# AI Coach Chat — Frontend

A small, clean Next.js chat UI for the FastAPI backend in `../api/`. One page, one input box, no fuss.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- Deploys to **Vercel** out of the box

## What it does

A single page that POSTs your message to the backend's `/api/chat` endpoint and shows the assistant's reply in a scrolling transcript. The backend is stateless (one-shot `{message} -> {reply}`), so the conversation history lives in the browser for display only.

## Prerequisites

- **Node.js 18.18+** (Next.js 14 requirement). Node 20 LTS recommended.
- The backend running somewhere reachable (see `../api/README.md`).

## Run it locally

From the `frontend/` directory:

```bash
# 1. Install deps
npm install

# 2. Point the UI at your backend
cp .env.local.example .env.local
# Edit .env.local if your backend isn't on http://localhost:8000

# 3. Start the dev server
npm run dev
```

Then open <http://localhost:3000>.

In a separate terminal, make sure the backend is up:

```bash
# from the repo root
export OPENAI_API_KEY=sk-...
uv run uvicorn api.index:app --reload
```

## Environment variables

| Variable | Purpose | Example |
| --- | --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` | Base URL prepended to `/api/chat`. Leave empty to call the same origin (the Vercel deploy case where the FastAPI function is mounted under `/api`). | `http://localhost:8000` |

Anything prefixed with `NEXT_PUBLIC_` is **exposed to the browser** — never put secrets here. The OpenAI key stays server-side in the FastAPI backend.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

The repo's existing `vercel.json` deploys the FastAPI app under `/api`. To ship the frontend alongside it:

1. Import the repo into Vercel and set the **Root Directory** to `frontend`.
2. Leave `NEXT_PUBLIC_API_BASE_URL` **unset** (or empty) so requests go to the same origin and hit the FastAPI function at `/api/chat`.
3. Set `OPENAI_API_KEY` in the Vercel project's environment variables (used by the backend, not the frontend).

## Project layout

```
frontend/
├── app/
│   ├── globals.css      # Tailwind directives + base styles
│   ├── layout.tsx       # Root HTML shell
│   └── page.tsx         # The chat UI (all the logic lives here)
├── .env.local.example   # Copy to .env.local and edit
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Troubleshooting

- **CORS errors in dev**: the backend allows all origins (`*`) by default, so this should Just Work. If you've locked it down, add `http://localhost:3000` to the allowed origins in `api/index.py`.
- **`OPENAI_API_KEY not configured` (500)**: the backend can't see the key. Export it in the shell where you run `uvicorn`, or put it in a `.env` file the backend loads via `python-dotenv`.
- **Network error / 404 on `/api/chat`**: double-check `NEXT_PUBLIC_API_BASE_URL` in `.env.local` matches where your backend is actually running.