import { ReactNode, useState } from "react";
import { Button, Text, View } from "react-native";
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
        <View className="bg-white w-full h-[60%] rounded-md p-20">
          <Text>Hello, this is a modal!</Text>
          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>
    </>
  );
}
