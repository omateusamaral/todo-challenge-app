import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useTodos } from "../../contexts/TodoContext";
import { Todo } from "../../interfaces/todo.interface";
import TodoItem from "../todoItem";

export default function TodoList() {
  const { todos, removeAllCompletedTodos } = useTodos();
  console.log(todos);
  return (
    <View className="flex-1">
      <View className="flex-row justify-between py-2">
        <Text className="text-white p-4">Lista de Tarefas</Text>
        {todos.length > 0 && (
          <TouchableOpacity onPress={removeAllCompletedTodos}>
            <View className="bg-[#05243E] rounded-lg p-2 border border-gray-950">
              <Text className="text-white">Limpar Concluídas</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={todos}
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
              Nenhuma tarefa encontrada
            </Text>
          </View>
        )}
      />
    </View>
  );
}
