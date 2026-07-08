import LiveClock from "./components/liveclock";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px",
        fontFamily: "Arial",
      }}
    >
      <h1>FastAPI + React SSE Demo</h1>
      <LiveClock />
    </div>
  );
}

export default App;