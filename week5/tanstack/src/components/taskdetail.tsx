import { useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../api/taskapi";

export default function TaskDetail() {
  const { id } = useParams({
    from: "/task/$id",
  });

  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const task = data?.find((t) => t.id === Number(id));

  if (!task) {
    return <h2>Task Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Detail</h1>

      <h2>ID: {task.id}</h2>

      <h3>{task.title}</h3>
    </div>
  );
}