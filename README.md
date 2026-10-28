# Portfolio — React + FastAPI

A personal portfolio website: a React (Vite) frontend backed by a Python FastAPI
API that serves all content and stores contact-form messages.

## Structure

```
├── backend/
│   ├── data.py          # ✏️ ALL site content lives here — edit this to make it yours
│   ├── main.py          # FastAPI app: /api endpoints + serves the built frontend
│   └── requirements.txt
└── frontend/
    ├── src/
    │   ├── App.jsx      # data fetching + reveal-on-scroll
    │   └── components/  # Navbar, Hero, About, Skills, Projects, Experience, Contact
    └── index.html
```

## Run in development (two terminals)

**1. Backend** (from the repo root):

```bat
.venv\Scripts\python -m uvicorn main:app --reload --port 8000 --app-dir backend
```

**2. Frontend** (requires Node 18+):

```bat
cd frontend
npm install
npm run dev
```

Open http://localhost:5173 — Vite proxies `/api` requests to the backend.

## Run in production mode (single process)

Build the frontend, then just run the backend — it serves the React app too:

```bat
cd frontend && npm run build && cd ..
.venv\Scripts\python -m uvicorn main:app --port 8000 --app-dir backend
```

Open http://127.0.0.1:8000

## API

| Method | Path             | Description                                    |
|--------|------------------|------------------------------------------------|
| GET    | `/api/health`    | Liveness check                                 |
| GET    | `/api/portfolio` | All site content (profile, skills, projects, experience) |
| POST   | `/api/contact`   | Contact form — saves JSON files to `backend/submissions/` |

## Customizing

- **Content (name, projects, skills, jobs, socials):** edit `backend/data.py` —
  no frontend changes needed; the UI renders whatever the API returns.
- **Colors/fonts:** edit the CSS variables at the top of `frontend/src/index.css`.
- **Page title/favicon:** `frontend/index.html`.
- **Résumé:** drop a PDF in `frontend/public/` and set `resumeUrl` to `/yourfile.pdf`.
