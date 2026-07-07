export interface Task {
  id: number;
  title: string;
  message: string;
  completed: boolean;
}

const API = "http://127.0.0.1:8000";

// GET all tasks
export async function getTasks(): Promise<Task[]> {
  const res = await fetch(`${API}/tasks`);

  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return res.json();
}

// CREATE a new task
export async function createTask(task: {
  title: string;
  message: string;
  completed: boolean;
}) {
  const res = await fetch(`${API}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  if (!res.ok) {
    throw new Error("Failed to create task");
  }

  return res.json();
}