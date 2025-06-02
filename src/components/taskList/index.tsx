import React from "react";
import { FlatList, Text, View } from "react-native";
import Task from "../task";

export default function TaskList() {
  return (
    <View className="flex-1">
      <View className="flex-row justify-between py-2">
        <Text className="text-white p-4">Lista de Tarefas</Text>
        <Text className="text-white p-4">0/0</Text>
      </View>
      <FlatList
        data={Array.from({ length: 100 }, (_, i) => ({ id: i.toString() }))}
        renderItem={({ item }) => <Task />}
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
