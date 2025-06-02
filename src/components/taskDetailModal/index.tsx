import AntDesign from "@expo/vector-icons/AntDesign";
import { ReactNode, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

interface TaskDetailModelChildrenProps {
  openModal: () => void;
}
interface TaskDetailModalProps {
  children: (props: TaskDetailModelChildrenProps) => ReactNode;
}
export default function TaskDetailModal({ children }: TaskDetailModalProps) {
  const [modalVisible, setModalVisible] = useState(false);

  function openModal() {
    setModalVisible(true);
  }
  function closeModal() {
    setModalVisible(false);
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
          <Text className="text-xl font-bold mb-4">Título: Meu Modal</Text>

          <Text className="text-base mb-2">Status: Ativo</Text>

          <Text className="text-base mb-2">
            Descrição: Este é um modal de exemplo com campos adicionais.
          </Text>

          <Text className="text-base mb-4">
            Data de Criação: {new Date().toLocaleDateString()}
          </Text>
          <View className="flex-row justify-between">
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-red-500 mr-2">Excluir</Text>
              <AntDesign name="delete" size={20} color="red" />
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-row items-center"
              onPress={closeModal}
            >
              <Text className="text-blue-500 mr-2">Fechar</Text>

              <AntDesign name="close" size={20} color="#3b82f6" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
