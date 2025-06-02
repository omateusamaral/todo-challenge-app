import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import { useDebounce } from "use-debounce";
import { TodoContextInterface } from "../interfaces/todo-context.interface";
import { Todo } from "../interfaces/todo.interface";

const TodoContext = createContext<TodoContextInterface | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const debouncedSearchQuery = useDebounce(searchQuery, 400);

  const addTodo = (title: string, description: string) => {
    const newTodo: Todo = {
      todoId: String(Date.now()),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const removeAllCompletedTodos = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const changeTodoStatus = (todoId: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.todoId === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const selectTodo = (todo: Todo) => setSelectedTodo(todo);
  const clearSelectedTodo = () => setSelectedTodo(null);

  const filteredTodos = useMemo(() => {
    if (!debouncedSearchQuery[0].trim()) {
      return todos;
    }
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(debouncedSearchQuery[0].toLowerCase())
    );
  }, [todos, debouncedSearchQuery]);

  const filteredCompletedTodos = useMemo(() => {
    return filteredTodos.filter((todo) => todo.completed);
  }, [filteredTodos]);

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        removeAllCompletedTodos,
        changeTodoStatus,
        selectedTodo,
        selectTodo,
        clearSelectedTodo,
        searchQuery,
        setSearchQuery,
        filteredTodos,
        filteredCompletedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos deve ser usado dentro de um TodoProvider");
  }
  return context;
};
