import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const eventSource = new EventSource(
      `${import.meta.env.VITE_API_URL}/events`
    );

    eventSource.onmessage = (event) => {
      setTime(event.data);
    };

    eventSource.onerror = () => {
      console.log("Connection error");
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h2>Live Time</h2>
      <h1>{time}</h1>
    </div>
  );
}