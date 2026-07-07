from database import Base, engine
from week3task.Day14.models import Task
Base.metadata.create_all(bind=engine)
print("Tables Created Successfully!")