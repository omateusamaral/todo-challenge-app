import { ScrollView } from "react-native";
import Header from "../components/header";
export default function Index() {
  return (
    <ScrollView
      className="flex-1 bg-gradient-to-t from-[#0d3b6c] to-[#1251a6]"
      showsVerticalScrollIndicator={false}
    >
      <Header />
    </ScrollView>
  );
}
