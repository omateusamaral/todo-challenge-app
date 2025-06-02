import { View } from "react-native";
import Header from "../components/header";
import TaskList from "../components/taskList";
export default function Index() {
  return (
    <View className="flex-1">
      <Header />
      <TaskList />
    </View>
  );
}
