from database import SessionLocal
from models import User, Post


db = SessionLocal()

user = db.query(User).filter(
    User.id == 1
).first()


print("User name:", user.author)


for post in user.posts:
    print("Post title:", post.title)
    print("Post description:", post.description)


