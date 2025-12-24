from pydantic import BaseModel
from typing import Optional

class ArticleCreate(BaseModel):
    title: str
    content: str
    source_url: str
    source_name: Optional[str] = None


class ArticleUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    source_url: Optional[str] = None
    source_name: Optional[str] = None 
