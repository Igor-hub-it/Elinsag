import datetime
import hashlib
from typing import List, Annotated

import jwt
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy import Column, Integer, String, create_engine, MetaData, Table, select, DateTime, Boolean
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.ext.declarative import declarative_base
from pydantic import BaseModel
from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from starlette import status

DATABASE_URL = "postgresql://postgres:postgrespw@localhost:49153/DBElinag"

engine = create_engine(DATABASE_URL)
metadata = MetaData()

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

app = FastAPI()

Base = declarative_base()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

SECRET = "pizda"


class User(Base):
    __tablename__ = "admins"

    id = Column(Integer, primary_key=True, index=True)
    is_admin = Column(Boolean, default=False)
    password = Column(String)
    username = Column(String)


class UserCreate(BaseModel):
    password: str
    username: str


class Article(Base):
    __tablename__ = "articles"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    content = Column(String)
    create_date = Column(DateTime, default=datetime.datetime.now())


class ArticleCreate(BaseModel):
    title: str
    content: str


class ArticleAllFields(ArticleCreate):
    id: int
    create_date: datetime.datetime

    class Config:
        orm_mode = True


# После определения всех моделей
Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def get_admin(token: Annotated[str, Depends(oauth2_scheme)], db: Session = Depends(get_db)):
    user_id = jwt.decode(token, SECRET, algorithms="HS256")["sub"]
    user = db.query(User).filter(user_id == User.id).one_or_none()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    if not user.is_admin:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user


@app.post("/register/")
def user_registration(user: UserCreate, db: Session = Depends(get_db)):
    password = hashlib.sha256(user.password.encode("utf-8")).hexdigest()
    user_db = User(password=password, username=user.username)
    db.add(user_db)
    db.commit()
    return {"status": "cocatь"}


@app.post("/token")
async def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], db: Session = Depends(get_db)):
    login_user = db.query(User).filter(form_data.username == User.username).one_or_none()
    if login_user is None:
        raise HTTPException(401)
    form_data.password = hashlib.sha256(form_data.password.encode("utf-8")).hexdigest()
    if login_user.password != form_data.password:
        raise HTTPException(401)

    token = jwt.encode({"sub": login_user.id}, SECRET)

    return {"access_token": token, "token_type": "bearer"}


@app.post("/articles/")
def create_article(article: ArticleCreate, db: Session = Depends(get_db), _=Depends(get_admin)):
    article_db = Article(title=article.title, content=article.content)
    db.add(article_db)
    db.commit()
    return {"message": "Статья успешно создана"}


@app.get("/articles/", response_model=List[ArticleAllFields])
def get_articles(db: Session = Depends(get_db)):
    return db.query(Article).all()


@app.get("/articles/{article_id}", response_model=ArticleAllFields)
def get_article(article_id: int, db: Session = Depends(get_db)):
    article = db.query(Article).filter(Article.id == article_id).one_or_none()
    if article is None:
        raise HTTPException(404)
    return article


@app.put("/articles/{article_id}")
def update_article(article_id: int, article_update: ArticleCreate, db: Session = Depends(get_db), _=Depends(get_admin)):
    article = db.query(Article).filter(Article.id == article_id).one_or_none()
    if article is None:
        raise HTTPException(404)
    article.title = article_update.title
    article.content = article_update.content
    db.commit()
    return {"message": "Статья успешно обновлена"}


@app.delete("/articles/{article_id}")
def delete_article(article_id: int, db: Session = Depends(get_db), _=Depends(get_admin)):
    article = db.query(Article).filter(Article.id == article_id).one_or_none()
    if article is None:
        raise HTTPException(404)
    db.delete(article)
    db.commit()
    return {"message": "Статья успешно удалена"}
