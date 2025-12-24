from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime
from datetime import datetime
from app.database import Base

class Article(Base):
    __tablename__ = "articles"

    id = Column(Integer, primary_key=True, index=True)

    # REAL DATA
    title = Column(String(500), nullable=False)
    content = Column(Text, nullable=False)
    source_url = Column(String(1000), nullable=False)
    source_name = Column(String(255), nullable=True)

    # PROCESSING FLAGS
    is_processed = Column(Boolean, default=False)
    is_updated = Column(Boolean, default=False)

    # META
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow)
