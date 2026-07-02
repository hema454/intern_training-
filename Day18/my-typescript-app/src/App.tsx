
import "./App.css";
import { formatQuote } from "./helpers/quote";

function App() {
  const result = formatQuote({
    quote: "Learning TypeScript is fun!",
    author: "hema",
  });

  return (
    <div>
      <h1>React + TypeScript</h1>
      <p>{result}</p>
    </div>
  );
}

export default App;