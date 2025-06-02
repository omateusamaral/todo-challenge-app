import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, TouchableOpacity, View } from "react-native";
import TaskDetailModal from "../taskDetailModal";

export default function Task() {
  return (
    <View className="p-2 px-6 bg-white flex-row justify-between items-center  flex  rounded-lg shadow-md m-2">
      <View>
        <View className="my-2">
          <Text className="text-bold text-md ">Task 1</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-gray-500">Data de criação: 2023-10-31</Text>
        </View>
      </View>
      <View>
        <TaskDetailModal>
          {({ openModal }) => (
            <TouchableOpacity onPress={openModal}>
              <AntDesign name="right" size={24} color="blue" />
            </TouchableOpacity>
          )}
        </TaskDetailModal>
      </View>
    </View>
  );
}
