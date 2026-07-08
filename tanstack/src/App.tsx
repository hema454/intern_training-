import { useQuery } from "@tanstack/react-query";
import { getTasks } from "./api/taskapi";

function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{(error as Error).message}</h2>;
  }

  return (
    <div>
      <h1>Tasks</h1>

      {(data ?? []).length === 0 ? (
        <p>No data found</p>
      ) : (
        (data ?? []).map((task: any) => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.message}</p>
            <p>{task.completed ? "Completed" : "Pending"}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default App;