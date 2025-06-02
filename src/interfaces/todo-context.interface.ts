import { Todo } from "./todo.interface";

export interface TodoContextInterface {
  addTodo: (title: string, description: string) => void;
  removeAllCompletedTodos: () => void;
  changeTodoStatus: (todoId: string) => void;
  selectedTodo: Todo | null;
  selectTodo: (todo: Todo) => void;
  clearSelectedTodo: () => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredTodos: Todo[];
  filteredCompletedTodos: Todo[];
}
