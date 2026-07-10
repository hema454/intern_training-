export interface Task {
  id: number;
  title: string;
  message: string;
  completed: boolean;
  created_at: string;
}

export interface TaskInput {
  title: string;
  message: string;
  completed: boolean;
}