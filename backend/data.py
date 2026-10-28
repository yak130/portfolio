"""
All portfolio content lives here — edit this file to make the site yours.
The frontend fetches everything from GET /api/portfolio.
"""

PORTFOLIO = {
    "profile": {
        "name": "Alex Morgan",
        "firstName": "Alex",
        "initials": "AM",
        "role": "Full-Stack Developer",
        "tagline": "I design and build fast, delightful web experiences — from the first pixel to production.",
        "location": "Berlin, Germany",
        "email": "hello@alexmorgan.dev",
        "available": True,
        "resumeUrl": "#",  # e.g. "/resume.pdf" — drop the file in frontend/public
        "socials": [
            {"label": "GitHub", "url": "https://github.com/alexmorgan", "icon": "github"},
            {"label": "LinkedIn", "url": "https://linkedin.com/in/alexmorgan", "icon": "linkedin"},
            {"label": "X / Twitter", "url": "https://x.com/alexmorgan", "icon": "x"},
        ],
        "about": [
            "I'm a full-stack developer with 6+ years of experience turning ideas into "
            "shipped products. My sweet spot is the intersection of thoughtful front-end "
            "craft and solid back-end architecture — mostly React on the front and "
            "Python (FastAPI/Django) on the back.",
            "Lately I've been building real-time dashboards, developer tooling and "
            "API-first products. I care about clean code, accessible interfaces, "
            "and systems that are boring to operate.",
        ],
        "facts": [
            {"label": "Experience", "value": "6+ years"},
            {"label": "Based in", "value": "Berlin, Germany"},
            {"label": "Focus", "value": "React · Python · APIs"},
            {"label": "Status", "value": "Open to freelance"},
        ],
    },
    "skills": [
        {
            "group": "Frontend",
            "icon": "layout",
            "items": ["React", "TypeScript", "JavaScript (ES2023)", "HTML5 & CSS3",
                      "Tailwind CSS", "Vite", "React Router", "Zustand"],
        },
        {
            "group": "Backend",
            "icon": "server",
            "items": ["Python", "FastAPI", "Django", "PostgreSQL", "Redis",
                      "SQLAlchemy", "REST API design", "Pydantic"],
        },
        {
            "group": "Tools & DevOps",
            "icon": "terminal",
            "items": ["Git & GitHub", "Docker", "CI/CD (GitHub Actions)", "Linux",
                      "Nginx", "AWS (EC2, S3, RDS)", "Playwright", "pytest"],
        },
    ],
    "projects": [
        {
            "title": "TaskFlow",
            "icon": "🗂️",
            "gradient": "linear-gradient(135deg, #6366f1, #22d3ee)",
            "description": "A real-time Kanban board for small teams with drag-and-drop, "
                           "live presence and per-board activity history.",
            "tech": ["React", "FastAPI", "WebSockets", "PostgreSQL"],
            "github": "https://github.com/alexmorgan/taskflow",
            "demo": "https://taskflow.example.com",
            "featured": True,
        },
        {
            "title": "WeatherScope",
            "icon": "🌦️",
            "gradient": "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
            "description": "A weather dashboard with 7-day forecasts, animated radar maps "
                           "and location search across 200k+ cities.",
            "tech": ["React", "D3.js", "Python", "Open-Meteo API"],
            "github": "https://github.com/alexmorgan/weatherscope",
            "demo": "https://weatherscope.example.com",
            "featured": True,
        },
        {
            "title": "BriefBot",
            "icon": "🤖",
            "gradient": "linear-gradient(135deg, #10b981, #22d3ee)",
            "description": "An AI newsletter summarizer that condenses long-form articles "
                           "into 5-bullet digests, delivered daily by email.",
            "tech": ["Python", "FastAPI", "LLM APIs", "Celery"],
            "github": "https://github.com/alexmorgan/briefbot",
            "demo": None,
            "featured": False,
        },
        {
            "title": "ShopLite",
            "icon": "🛍️",
            "gradient": "linear-gradient(135deg, #f59e0b, #ef4444)",
            "description": "A lightweight e-commerce storefront starter with cart, checkout "
                           "flow and an admin panel for inventory.",
            "tech": ["React", "Django", "Stripe", "SQLite"],
            "github": "https://github.com/alexmorgan/shoplite",
            "demo": "https://shoplite.example.com",
            "featured": False,
        },
    ],
    "experience": [
        {
            "role": "Senior Full-Stack Developer",
            "company": "Northwind Labs",
            "period": "2022 — Present",
            "summary": "Leading the web platform team for a B2B analytics product.",
            "highlights": [
                "Rebuilt the dashboard in React + TypeScript, cutting time-to-interactive by 60%.",
                "Designed a FastAPI service layer used by web, mobile and partner integrations.",
                "Introduced contract testing and preview deployments to the CI pipeline.",
            ],
        },
        {
            "role": "Full-Stack Developer",
            "company": "Pixel & Pine (startup)",
            "period": "2020 — 2022",
            "summary": "Early engineer; shipped the MVP and scaled it to 40k users.",
            "highlights": [
                "Built the customer portal and billing integration with Stripe.",
                "Moved the monolith's reporting jobs to Celery + Redis, ending nightly timeouts.",
            ],
        },
        {
            "role": "Junior Web Developer",
            "company": "Studio Meridian",
            "period": "2018 — 2020",
            "summary": "Agency work across 20+ client sites and campaigns.",
            "highlights": [
                "Delivered responsive marketing sites and headless CMS integrations.",
                "Owned the internal component library used on every new project.",
            ],
        },
    ],
}
