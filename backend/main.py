"""
Portfolio API + production static server.

Run (development):
    .venv/Scripts/python -m uvicorn main:app --reload --port 8000

In production mode (after `npm run build` in ../frontend) this also serves the
built React app, so a single process hosts the whole site.
"""

import json
import uuid
from datetime import datetime, timezone
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from data import PORTFOLIO

BASE_DIR = Path(__file__).resolve().parent
FRONTEND_DIST = BASE_DIR.parent / "frontend" / "dist"
SUBMISSIONS_DIR = BASE_DIR / "submissions"

EMAIL_RE = r"^[^@\s]+@[^@\s]+\.[^@\s]+$"

app = FastAPI(title="Portfolio API", version="1.0.0")

# Dev server (Vite on :5173) talks to this API directly; in production the
# same origin serves everything, so CORS is only needed for local dev.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactMessage(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: str = Field(pattern=EMAIL_RE, max_length=200)
    message: str = Field(min_length=10, max_length=5000)


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.get("/api/portfolio")
def portfolio():
    return PORTFOLIO


@app.post("/api/contact")
def contact(msg: ContactMessage):
    SUBMISSIONS_DIR.mkdir(exist_ok=True)
    stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    path = SUBMISSIONS_DIR / f"{stamp}_{uuid.uuid4().hex[:8]}.json"
    payload = {
        "received_at": datetime.now(timezone.utc).isoformat(),
        **msg.model_dump(),
    }
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    return {"ok": True, "message": "Thanks! Your message has been sent."}


if FRONTEND_DIST.is_dir():
    assets = FRONTEND_DIST / "assets"
    if assets.is_dir():
        app.mount("/assets", StaticFiles(directory=assets), name="assets")

    @app.get("/{full_path:path}", include_in_schema=False)
    def spa(full_path: str):
        if full_path.startswith("api/") or full_path == "api":
            raise HTTPException(status_code=404)
        candidate = (FRONTEND_DIST / full_path).resolve()
        if candidate.is_file() and FRONTEND_DIST.resolve() in candidate.parents:
            return FileResponse(candidate)
        return FileResponse(FRONTEND_DIST / "index.html")
else:
    @app.get("/", include_in_schema=False)
    def no_frontend():
        return {
            "hint": "Frontend build not found. Run `npm install && npm run build` "
                    "in ./frontend, or use `npm run dev` there for development."
        }
