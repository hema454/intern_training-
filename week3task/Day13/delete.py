from database import SessionLocal
from models import User

db= SessionLocal()
user = db.query(User).filter(User.id==11).first()

if user:
    db.delete(user)
    db.commit()
    print("deleted successfully")
else:
    print("user not found")

