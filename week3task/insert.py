from database import SessionLocal
from models import User


db = SessionLocal()


new_user = User(
    author="rani",
    email="rani@gmail.com"
)


db.add(new_user)
db.commit()
db.refresh(new_user)


print("User Added Successfully!")

db.close()