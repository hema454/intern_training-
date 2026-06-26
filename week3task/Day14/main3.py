from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from schemas import TaskCreate, TaskResponse
import crud

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/tasks", response_model=TaskResponse)
def create_task(task: TaskCreate, db: Session = Depends(get_db)):
    return crud.create_task(db, task)

@app.get("/tasks/{id}", response_model=TaskResponse)
def get_task(id: int, db: Session = Depends(get_db)):
    task = crud.get_task(db, id)

    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return task

@app.get("/tasks", response_model=list[TaskResponse])
def get_tasks(db: Session = Depends(get_db)):
    return crud.get_tasks(db)

@app.put("/tasks/{id}", response_model=TaskResponse)
def update_task(id: int, updated_task: TaskCreate, db: Session = Depends(get_db)):
    task = crud.update_task(db, id, updated_task)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return task


@app.delete("/tasks/{id}")
def delete_task(id: int, db: Session = Depends(get_db)):
    task = crud.delete_task(db, id)

    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return {"message": "Task deleted successfully"}