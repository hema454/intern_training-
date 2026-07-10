import TaskForm from "./components/taskform";
import TaskList from "./components/tasklist";

function App() {
  return (
    <div className="container">
      <h1>Task Manager</h1>

      <TaskForm />

      <TaskList />
    </div>
  );
}

export default App;