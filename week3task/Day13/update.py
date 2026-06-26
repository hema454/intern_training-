from database import SessionLocal
from models import User


db = SessionLocal()


user = db.query(User).filter(
    User.id == 11
).first()


if user:
    user.author = "rekha"

    db.commit()

    print("User Updated Successfully!")

else:
    print("User not found")