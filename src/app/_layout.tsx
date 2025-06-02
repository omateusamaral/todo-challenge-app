import { Slot } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#1251a6]  px-4 py-2 ">
        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
