import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { getTasks, createTask } from "../api/taskapi";

interface Task {
  id: number;
  title: string;
  message: string;
  completed: boolean;
}

export default function TaskList() {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [completed, setCompleted] = useState(false);

  const {
    data: tasks,
    isLoading,
    isError,
  } = useQuery<Task[]>({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    mutation.mutate({
      title,
      message,
      completed,
    });
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error loading tasks.</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Task message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <br />
        <br />

        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          Completed
        </label>

        <br />
        <br />

        <button type="submit">
          Add Task
        </button>
      </form>

      <hr />

      {tasks?.map((task) => (
        <div
          key={task.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{task.title}</h3>

          <p>{task.message}</p>

          <p>
            <strong>Status:</strong>{" "}
            <span
              style={{
                color: task.completed ? "green" : "orange",
                fontWeight: "bold",
              }}
            >
              {task.completed ? "Completed" : "Pending"}
            </span>
          </p>

          <Link
            to="/task/$id"
            params={{ id: String(task.id) }}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}