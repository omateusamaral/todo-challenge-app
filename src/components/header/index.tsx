import { TextInput, View } from "react-native";
export default function Header() {
  return (
    <View className="flex-col items-center justify-between">
      <View className="w-full">
        <TextInput
          className="border border-gray-950 rounded-lg p-4 bg-[#05243E] color-white text-sm w-full"
          placeholder="Pesquise por titulo de tarefas..."
          placeholderTextColor="#94a3b8"
        />
      </View>
    </View>
  );
}
