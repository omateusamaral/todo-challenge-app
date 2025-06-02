import { View } from "react-native";
import Header from "../components/header";
import TodoList from "../components/todoList";
export default function Index() {
  return (
    <View className="flex-1">
      <Header />
      <TodoList />
    </View>
  );
}
