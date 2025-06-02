import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useTodos } from "../../contexts/TodoContext";
export default function Header() {
  const router = useRouter();
  const { setSearchQuery, searchQuery } = useTodos();
  return (
    <View className="flex-row items-center justify-around">
      <View className="w-4/5">
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          className="border border-gray-950 rounded-lg p-4 bg-[#05243E] color-white text-sm"
          placeholder="Pesquise por titulo de tarefas..."
          placeholderTextColor="#94a3b8"
        />
      </View>
      <TouchableOpacity onPress={() => router.push("/createToDo")}>
        <View className="bg-[#05243E] rounded-lg p-4 border border-gray-950">
          <AntDesign name="plus" size={18} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
