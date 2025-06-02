import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useTodos } from "../../contexts/TodoContext";
import { Todo } from "../../interfaces/todo.interface";
import TodoItem from "../todoItem";

export default function TodoList() {
  const { filteredTodos, filteredCompletedTodos, removeAllCompletedTodos } =
    useTodos();
  return (
    <View className="flex-1 ">
      <View className="flex-row items-center justify-between  px-2 py-4">
        <View className="w-3/5">
          <Text className="text-white">Lista de Tarefas</Text>
        </View>
        {filteredCompletedTodos.length > 0 && (
          <TouchableOpacity onPress={removeAllCompletedTodos}>
            <View className="bg-[#05243E] rounded-lg p-4 border border-gray-950">
              <Text className="text-white">Limpar Concluídas</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={filteredTodos}
        renderItem={({ item }: { item: Todo }) => <TodoItem todo={item} />}
        keyExtractor={(item) => item.todoId}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center">
            <Text className="text-white text-lg">
              Adicione uma tarefa para começar!
            </Text>
          </View>
        )}
      />
    </View>
  );
}
