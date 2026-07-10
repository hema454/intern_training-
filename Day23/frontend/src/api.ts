import axios from "axios";
import { type TaskInput } from "./types";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getTasks = async () => {
  const response = await api.get("/tasks");
  return response.data;
};

export const createTask = async (task: TaskInput) => {
  const response = await api.post("/tasks", task);
  return response.data;
};

export const updateTask = async ({
  id,
  task,
}: {
  id: number;
  task: TaskInput;
}) => {
  const response = await api.put(`/tasks/${id}`, task);
  return response.data;
};

export const deleteTask = async (id: number) => {
  await api.delete(`/tasks/${id}`);
};