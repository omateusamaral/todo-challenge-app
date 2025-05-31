import React from "react";
import { FlatList, Text, View } from "react-native";

export default function TaskList() {
  return (
    <View className="flex-1">
      <View className="flex-row items-center justify-between px-4 py-2">
        <Text className="text-white p-4">Lista de Tarefas</Text>
        <Text className="text-white p-4">0/0</Text>
      </View>
      <FlatList
        data={[]}
        renderItem={({ item }) => <Text>{item}</Text>}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={false}
      />
    </View>
  );
}
