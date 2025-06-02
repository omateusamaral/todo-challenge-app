export interface Todo {
  todoId: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt?: Date;
}
