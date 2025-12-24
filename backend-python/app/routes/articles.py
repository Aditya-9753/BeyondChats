from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime

from app.database import SessionLocal
from app.models.article import Article
from app.schemas.article import ArticleCreate, ArticleUpdate

router = APIRouter(prefix="/api/articles", tags=["Articles"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# 1️⃣ INGEST REAL ARTICLE (from Node / Python scraper)
@router.post("/")
def ingest_article(article: ArticleCreate, db: Session = Depends(get_db)):
    new_article = Article(
        title=article.title,
        content=article.content,
        source_url=article.source_url,
        source_name=article.source_name
    )
    db.add(new_article)
    db.commit()
    db.refresh(new_article)
    return new_article


# 2️⃣ LIST ALL ARTICLES
@router.get("/")
def get_articles(db: Session = Depends(get_db)):
    return db.query(Article).order_by(Article.created_at.desc()).all()


# 3️⃣ MARK ARTICLE AS LLM-PROCESSED
@router.put("/{article_id}/process")
def mark_article_processed(article_id: int, db: Session = Depends(get_db)):
    article = db.query(Article).filter(Article.id == article_id).first()

    if not article:
        raise HTTPException(status_code=404, detail="Article not found")

    article.is_processed = True
    article.is_updated = True
    article.updated_at = datetime.utcnow()

    db.commit()
    db.refresh(article)
    return article


# 4️⃣ GET ARTICLE BY ID
@router.get("/{article_id}")
def get_article(article_id: int, db: Session = Depends(get_db)):
    article = db.query(Article).filter(Article.id == article_id).first()

    if not article:
        raise HTTPException(status_code=404, detail="Article not found")

    return article


# 5️⃣ UPDATE ARTICLE DETAILS (MANUAL / ADMIN)
@router.put("/{article_id}")
def update_article(
    article_id: int,
    article_update: ArticleUpdate,
    db: Session = Depends(get_db)
):
    article = db.query(Article).filter(Article.id == article_id).first()

    if not article:
        raise HTTPException(status_code=404, detail="Article not found")

    if article_update.title is not None:
        article.title = article_update.title
    if article_update.content is not None:
        article.content = article_update.content
    if article_update.source_url is not None:
        article.source_url = article_update.source_url
    if article_update.source_name is not None:
        article.source_name = article_update.source_name

    article.updated_at = datetime.utcnow()

    db.commit()
    db.refresh(article)
    return article


# 6️⃣ DELETE ARTICLE
@router.delete("/{article_id}")
def delete_article(article_id: int, db: Session = Depends(get_db)):
    article = db.query(Article).filter(Article.id == article_id).first()

    if not article:
        raise HTTPException(status_code=404, detail="Article not found")

    db.delete(article)
    db.commit()
    return {"message": "Article deleted successfully"}
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    