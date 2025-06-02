import { ReactNode, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { useTodos } from "../../contexts/TodoContext";

interface TaskDetailModelChildrenProps {
  openModal: () => void;
}
interface TaskDetailModalProps {
  children: (props: TaskDetailModelChildrenProps) => ReactNode;
}
export default function TodoDetailModal({ children }: TaskDetailModalProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const { changeTodoStatus, clearSelectedTodo, selectedTodo } = useTodos();

  function openModal() {
    setModalVisible(true);
  }
  function closeModal() {
    setModalVisible(false);
  }

  function handleChangeStatus() {
    if (selectedTodo) {
      changeTodoStatus(selectedTodo.todoId);
      clearSelectedTodo();
      closeModal();
    }
  }
  return (
    <>
      {children({
        openModal,
      })}
      <Modal
        isVisible={modalVisible}
        animationIn="slideInUp"
        className="justify-end m-0 flex-1"
      >
        <View className="bg-white w-full rounded-md p-10">
          <Text className="text-xl font-bold mb-4">
            Título: {selectedTodo?.title}
          </Text>
          <Text className="text-base mb-4">
            Data de Criação: {new Date().toLocaleDateString()}
          </Text>
          <Text className="text-base mb-2">
            Status: {selectedTodo?.completed ? "Concluído" : "Pendente"}
          </Text>
          <Text className="text-base mb-2">
            Descrição: {selectedTodo?.description || "Sem descrição"}
          </Text>
          <View className="flex-row mt-4 justify-around w-full items-center gap-2">
            <TouchableOpacity
              onPress={closeModal}
              className="border-[#0EA5E9] border rounded-lg p-4 mb-4 w-6/12 items-center justify-center"
            >
              <Text className="text-[#05243E] text-center text-lg">Fechar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={` ${
                selectedTodo?.completed
                  ? "border-yellow-500"
                  : "border-green-500"
              } border rounded-lg p-4 mb-4 w-6/12 items-center justify-center`}
              onPress={handleChangeStatus}
            >
              {selectedTodo?.completed ? (
                <>
                  <Text className="text-yellow-500 text-center text-lg">
                    Deixar prendente
                  </Text>
                </>
              ) : (
                <>
                  <Text className="text-green-500 text-center text-lg">
                    Concluir
                  </Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
