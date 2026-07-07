import { useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../api/taskapi";

interface Task {
  id: number;
  title: string;
  message: string;
  completed: boolean;
}

export default function TaskDetail() {
  const { id } = useParams({
    from: "/task/$id",
  });

  const {
    data,
    isLoading,
    isError,
  } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error loading task.</h2>;
  }

  const task = data?.find((t) => t.id === Number(id));

  if (!task) {
    return <h2>Task Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Detail</h1>

      <h2>{task.title}</h2>

      <p>
        <strong>ID:</strong> {task.id}
      </p>

      <p>
        <strong>Message:</strong> {task.message}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {task.completed ? "Completed" : "Pending"}
      </p>
    </div>
  );
}