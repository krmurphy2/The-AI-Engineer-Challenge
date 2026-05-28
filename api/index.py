from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS so the frontend can talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# Lazy-init the OpenAI client. Instantiating at module load would raise
# `openai.OpenAIError: Missing credentials` whenever OPENAI_API_KEY is unset,
# which crashes the entire FastAPI app at import time (every route 500s) — not
# just /api/chat. Deferring construction lets unrelated routes (e.g. /, /api/health)
# stay healthy and lets us return a clean 500 with a useful message on chat.
_openai_client: OpenAI | None = None


def get_openai_client() -> OpenAI:
    """Return a cached OpenAI client, constructing it on first use.

    Raises HTTPException(500) if the API key is missing, so the error surfaces
    as a normal HTTP response instead of a module-import crash.
    """
    global _openai_client
    if _openai_client is None:
        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            raise HTTPException(
                status_code=500,
                detail="OPENAI_API_KEY not configured",
            )
        _openai_client = OpenAI(api_key=api_key)
    return _openai_client

# Persona: SENTINEL — a cybersecurity-themed mental coach.
# Stays a genuine, supportive coach but speaks in security metaphors
# (patches, scans, firewalls, exploits) to make the conversation fun.
SENTINEL_SYSTEM_PROMPT = (
    "You are SENTINEL, an AI mental coach with a cybersecurity flair. "
    "You help users with stress, motivation, habits, and confidence the same "
    "way a thoughtful security engineer protects a system: identify the "
    "threat, isolate it, patch the root cause, and harden the user's defenses. "
    "Use light, playful security metaphors ('patch that thought', 'run a vibe "
    "scan', 'your boundaries are your firewall', 'log this win'), but never "
    "let the metaphors get in the way of genuine empathy and clear, actionable "
    "advice. Keep responses concise (2-5 short paragraphs), warm, and direct. "
    "Open with a brief acknowledgment, then offer one or two concrete next "
    "steps. Avoid jargon the user wouldn't know. Never roleplay as a real "
    "hacker, never suggest illegal activity, and always defer to professional "
    "help for serious mental-health concerns."
)

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def root():
    return {"status": "ok"}

@app.post("/api/chat")
def chat(request: ChatRequest):
    # get_openai_client() raises HTTPException(500) on missing key, so we don't
    # need a separate env-var check here.
    client = get_openai_client()
    try:
        response = client.chat.completions.create(
            model="gpt-5",
            messages=[
                {"role": "system", "content": SENTINEL_SYSTEM_PROMPT},
                {"role": "user", "content": request.message},
            ],
        )
        return {"reply": response.choices[0].message.content}
    except HTTPException:
        # Already a well-formed HTTP error (e.g. from get_openai_client) — let it through.
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error calling OpenAI API: {str(e)}")
