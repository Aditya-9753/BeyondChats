from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.routes.articles import router as articles_router

# App instance
app = FastAPI(
    title="BeyondChats Backend",
    description="Backend for real article ingestion and LLM processing",
    version="1.0.0"
)

# CORS (Frontend + Node LLM access)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # later you can restrict
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create tables
Base.metadata.create_all(bind=engine)

# Routes
app.include_router(articles_router)

# Root
@app.get("/")
def root():
    return {"message": "BeyondChats backend is running"}

# Health check (important for Node + deployment)
@app.get("/health")
def health_check():
    return {"status": "ok"}
