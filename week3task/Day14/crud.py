from sqlalchemy.orm import Session
from week3task.Day14.schemas import Task
from schemas import TaskCreate

def create_task(db: Session, task: TaskCreate):

    new_task = Task(
        title=task.title,
        message=task.message,
        completed=task.completed
    )
    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    return new_task

def get_task(db: Session, id: int):
    return db.query(Task).filter(Task.id == id).first()

def get_tasks(db: Session):
    return db.query(Task).all()

def update_task(db: Session, id: int, updated_task: TaskCreate):
    task = db.query(Task).filter(Task.id == id).first()
    if task:
        task.title = updated_task.title
        task.message = updated_task.message
        task.completed = updated_task.completed
        db.commit()
        db.refresh(task)
    return task

def delete_task(db: Session, id: int):
    task = db.query(Task).filter(Task.id == id).first()
    if task:
        db.delete(task)
        db.commit()
    return task