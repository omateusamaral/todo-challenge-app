import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";
import uuid from "react-native-uuid";
import { Todo } from "../interfaces/todo.interface";

type TodoContextType = {
  todos: Todo[];
  selectedTodo: Todo | null;
  addTodo: (title: string, description: string) => void;
  changeTodoStatus: (todoId: string) => void;
  removeAllCompletedTodos: () => void;
  selectTodo: (todo: Todo) => void;
  clearSelectedTodo: () => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);
const TODOS_KEY = "@todos_key";

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const stored = await AsyncStorage.getItem(TODOS_KEY);
        if (stored) setTodos(JSON.parse(stored));
      } catch (e) {
        console.error("Erro ao carregar todos", e);
        Alert.alert("Erro ao carregar todos");
      }
    };
    loadTodos();
  }, []);

  const saveTodos = async (newTodos: Todo[]) => {
    try {
      await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(newTodos));
    } catch (e) {
      console.error("Erro ao salvar todos", e);
      Alert.alert("Erro ao salvar todos");
    }
  };

  const addTodo = (title: string, description: string) => {
    const newTodo: Todo = {
      todoId: uuid.v4() as string,
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  const changeTodoStatus = (todoId: string) => {
    const newTodos = todos.map((todo) =>
      todo.todoId === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  const removeAllCompletedTodos = () => {
    const newTodos = todos.filter((t) => !t.completed);
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  const selectTodo = (todo: Todo) => setSelectedTodo(todo);
  const clearSelectedTodo = () => setSelectedTodo(null);

  return (
    <TodoContext.Provider
      value={{
        todos,
        selectedTodo,
        addTodo,
        changeTodoStatus,
        removeAllCompletedTodos,
        selectTodo,
        clearSelectedTodo,
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
