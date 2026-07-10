from pydantic import BaseModel
from datetime import datetime

class TaskCreate(BaseModel):
    title: str
    message: str
    completed: bool = False

class TaskResponse(BaseModel):
    id: int
    title: str
    message: str
    completed: bool
    created_at: datetime

    model_config = {
        "from_attributes": True
    }