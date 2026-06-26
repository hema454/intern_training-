from pydantic import BaseModel

class TaskCreate(BaseModel):
    title: str
    message: str
    completed: bool = False
    


class TaskResponse(BaseModel):
    id: int
    title: str
    message: str
    completed: bool

    class Config:
        from_attributes = True