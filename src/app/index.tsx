import { View } from "react-native";
import Header from "../components/header";
import TodoList from "../components/todoList";
import { TodoProvider } from "../contexts/TodoContext";
export default function Index() {
  return (
    <TodoProvider>
      <View className="flex-1">
        <Header />
        <TodoList />
      </View>
    </TodoProvider>
  );
}
