from database import SessionLocal
from models import Post

db = SessionLocal()

post1 = Post(
    title="Advanced SQL",
    description="Learning SQL",
)

post2 = Post(
    title="FastAPI",
    description="Building APIs",
)

db.add_all([post1, post2])
db.commit()

print("Posts Added!")