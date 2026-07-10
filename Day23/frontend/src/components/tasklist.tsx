import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteTask, getTasks, updateTask } from "../api";
import type { Task } from "../types";

export default function TaskList() {
  const queryClient = useQueryClient();

  const { data = [], isLoading } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {data.map((task) => (
        <div key={task.id} className="card">
          <h3>{task.title}</h3>

          <p>{task.message}</p>

          <p>{task.completed ? "Completed" : "Pending"}</p>

          <button
            onClick={() =>
              updateMutation.mutate({
                id: task.id,
                task: {
                  title: task.title,
                  message: task.message,
                  completed: !task.completed,
                },
              })
            }
          >
            Toggle Status
          </button>

          <button onClick={() => deleteMutation.mutate(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}