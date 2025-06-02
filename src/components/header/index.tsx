import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { TextInput, TouchableOpacity, View } from "react-native";
export default function Header() {
  const router = useRouter();
  return (
    <View className="flex-row items-center justify-evenly">
      <View className="w-4/5">
        <TextInput
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
