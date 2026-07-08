from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sse_starlette.sse import EventSourceResponse
import asyncio
from datetime import datetime

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# SSE clock stream
async def clock():
    while True:
        current_time = datetime.now().strftime("%H:%M:%S")

        yield {
    "data": current_time
}
        await asyncio.sleep(1)

@app.get("/events")
async def events():
    return EventSourceResponse(clock())