# app/main.py
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr, constr
from jinja2 import Environment, FileSystemLoader
import smtplib
from email.message import EmailMessage
import os, logging
from dotenv import load_dotenv
from datetime import datetime
from .sample_data import PROJECTS, EXPERIENCE, SKILLS

load_dotenv()
app = FastAPI(title="Portfolio API", version="1.0.0")
logger = logging.getLogger("uvicorn.error")

# ======================
# ======   CORS   ======
# ======================
origins = os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in origins],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ======================
# ====== ROUTES ========
# ======================
@app.get("/api/health")
def health():
    return {"status": "ok"}

@app.get("/api/projects")
def get_projects(tag: str | None = None):
    if tag:
        return [p for p in PROJECTS if tag.lower() in [t.lower() for t in p["tags"]]]
    return PROJECTS

@app.get("/api/experience")
def get_experience():
    return EXPERIENCE

@app.get("/api/skills")
def get_skills():
    return SKILLS


# ==============================
# ====== HANDLER ERREURS ======
# ==============================
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    logger.error(exc.errors())
    return JSONResponse(status_code=422, content={"detail": exc.errors()})


# ==============================
# ====== CONTACT FORM ==========
# ==============================
MAIL_TO = os.getenv("MAIL_TO")
MAIL_FROM = os.getenv("MAIL_FROM")
SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASS = os.getenv("SMTP_PASS")
SMTP_TLS = os.getenv("SMTP_TLS", "true").lower() == "true"

# Config Jinja2 pour les templates HTML
templates_env = Environment(loader=FileSystemLoader("app/templates"))

class ContactIn(BaseModel):
    name: constr(strip_whitespace=True, min_length=1) | None = None
    email: EmailStr
    message: constr(strip_whitespace=True, min_length=5, max_length=5000)

@app.post("/api/contact")
async def contact(payload: ContactIn):
    subject = f"Nouveau message - {payload.name or payload.email}"

    # Rendu du template
    template = templates_env.get_template("email.html")
    html_content = template.render(
        subject=subject,
        name=payload.name,
        email=payload.email,
        message=payload.message,
        sent_at=datetime.now().strftime("%d/%m/%Y %H:%M")
    )

    try:
        msg = EmailMessage()
        msg["From"] = MAIL_FROM
        msg["To"] = MAIL_TO
        msg["Subject"] = subject
        msg["Reply-To"] = payload.email
        msg.set_content("Message texte automatique du portfolio")
        msg.add_alternative(html_content, subtype="html")

        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as smtp:
            if SMTP_TLS:
                smtp.starttls()
            if SMTP_USER and SMTP_PASS:
                smtp.login(SMTP_USER, SMTP_PASS)
            smtp.send_message(msg)

        logger.info("Email envoyé avec succès (SMTP)")
        return {"ok": True}

    except Exception as e:
        logger.exception("Erreur d’envoi SMTP")
        raise HTTPException(status_code=500, detail=f"Send failed: {e}")
