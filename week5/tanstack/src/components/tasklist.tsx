import { useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { getTasks, createTask } from "../api/taskapi";

export default function TaskList() {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [completed, setCompleted] = useState(false);

  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const mutation = useMutation({
    mutationFn: createTask,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });

      setTitle("");
      setMessage("");
      setCompleted(false);
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error: {(error as Error).message}</h2>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Task Manager</h1>

      <h3>Add New Task</h3>

      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <textarea
        placeholder="Enter Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />{" "}
        Completed
      </label>

      <br />
      <br />

      <button
        onClick={() =>
          mutation.mutate({
            title,
            message,
            completed,
          })
        }
      >
        Add Task
      </button>

      {mutation.isPending && <p>Adding Task...</p>}

      {mutation.isError && (
        <p style={{ color: "red" }}>
          {(mutation.error as Error).message}
        </p>
      )}

      <hr />

      <h2>Task List</h2>

      {tasks && tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks?.map((task) => (
            <li key={task.id} style={{ marginBottom: "10px" }}>
              <Link
                to="/task/$id"
                params={{ id: String(task.id) }}
              >
                {task.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}