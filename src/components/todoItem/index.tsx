import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTodos } from "../../contexts/TodoContext";
import { Todo } from "../../interfaces/todo.interface";
import TodoDetailModal from "../todoDetailModal";

interface TaskInterface {
  todo: Todo;
}

const TodoItem = React.memo(({ todo }: TaskInterface) => {
  const { selectTodo } = useTodos();

  function handleSelectTodo(openModal: () => void) {
    selectTodo(todo);
    openModal();
  }

  return (
    <View className="p-2 px-6 bg-white flex-row justify-between items-center flex rounded-lg shadow-md m-2">
      <View>
        <View className="my-2">
          <Text className="text-bold text-md">{todo.title}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-gray-500">
            Data de criação: {todo.createdAt?.toLocaleString("pt-BR")}
          </Text>
        </View>
      </View>
      <View>
        <TodoDetailModal>
          {({ openModal }) => (
            <TouchableOpacity onPress={() => handleSelectTodo(openModal)}>
              <AntDesign
                name="right"
                size={24}
                color={todo.completed ? "green" : "blue"}
              />
            </TouchableOpacity>
          )}
        </TodoDetailModal>
      </View>
    </View>
  );
});

TodoItem.displayName = "TodoItem";

export default TodoItem;
