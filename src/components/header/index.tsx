import { Text, TextInput, View } from "react-native";
export default function Header() {
  return (
    <View className="flex-col items-center justify-between px-4 py-2">
      <View>
        <Text className="text-white p-4">Todo App</Text>
      </View>
      <View className="w-full">
        <TextInput
          className="border border-gray-950 rounded-lg p-2 color-slate-400 text-sm w-full"
          placeholder="Pesquise por titulo de tarefas..."
        />
      </View>
    </View>
  );
}
