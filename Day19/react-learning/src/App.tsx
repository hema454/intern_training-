import "./App.css";
import Counter from "./components/Mycounter";
import Card from "./components/Card";
import List from "./components/List";

function App() {
  return (
    <div className="container">
      <Counter />

      <Card
        title="React"
        description="A JavaScript library for building user interfaces."
      />

      <Card
        title="TypeScript"
        description="Adds static typing to JavaScript."
      />

      <Card
        title="Vite"
        description="A fast frontend build tool."
      />

      <List />
    </div>
  );
}

export default App;