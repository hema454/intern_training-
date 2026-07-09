from fastapi import FastAPI
from sse_starlette.sse import EventSourceResponse
import asyncio
from datetime import datetime


app = FastAPI()


# SSE clock stream
async def clock():

    while True:

        current_time = datetime.now().strftime("%H:%M:%S")

        yield {
            "event": "clock",
            "data": current_time
        }

        await asyncio.sleep(1)



@app.get("/events")
async def events():

    return EventSourceResponse(clock())