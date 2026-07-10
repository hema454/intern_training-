from database.database import Base, engine
from database.models import Task
Base.metadata.create_all(bind=engine)
print("Tables Created Successfully!")