# Backend (FastAPI)

## Démarrer
```bash
python -m venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate

pip install -r requirements.txt
uvicorn app.main:app --reload
```

## CORS
Créez `.env` (copiez `.env.example`) et ajustez `CORS_ORIGINS` si nécessaire.

## Endpoints
- GET /api/health
- GET /api/projects?tag=web|mobile|data
- GET /api/experience
- GET /api/skills
