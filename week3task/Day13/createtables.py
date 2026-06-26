from database import Base, engine
from models import User, Post


Base.metadata.create_all(bind=engine)

print("Tables Created Successfully!")