import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export interface Task {
  id: number;
  title: string;
  message: string;
  completed: boolean;
}

export const getTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const getTask = async (id: number) => {
  const response = await axios.get(`${API_URL}/tasks/${id}`);
  return response.data;
};

export const createTask = async (task: {
  title: string;
  message: string;
  completed?: boolean;
}) => {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data;
};