import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function NovaTela() {
  const router = useRouter();

  return (
    <View className="flex-1">
      <Text className="text-xl mb-4">Esta é a Nova Tela!</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
