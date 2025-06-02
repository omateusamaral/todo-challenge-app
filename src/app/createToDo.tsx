import { useRouter } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { TodoSchema } from "../schemas/todo.schema";
export default function CreateTodo() {
  const router = useRouter();

  function handleClose(resetForm: () => void) {
    resetForm();
    router.back();
  }
  return (
    <View className="flex-1 bg-white p-4  shadow-lg rounded-lg">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl font-bold">Criar Tarefa</Text>
      </View>
      <Formik
        initialValues={{ title: "", description: "" }}
        validationSchema={TodoSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm,
          values,
          errors,
          touched,
        }) => (
          <>
            <TextInput
              placeholder="Título"
              className="border border-gray-950 rounded-lg p-4 bg-[#05243E]  color-white text-sm mb-4"
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
              autoCapitalize="none"
              placeholderTextColor="white"
            />
            {errors.title && touched.title && (
              <Text className="color-red-500 mb-3">{errors.title}</Text>
            )}

            <TextInput
              placeholder="Descrição"
              className="border border-gray-950 rounded-lg p-4 bg-[#05243E]  color-white text-md h-32 align-top mb-4"
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.description}
              keyboardType="twitter"
              multiline={true}
              numberOfLines={5}
              placeholderTextColor="white"
            />
            {errors.description && touched.description && (
              <Text className="color-red-500 mb-3">{errors.description}</Text>
            )}

            <View className="flex-row mt-4 justify-around w-full items-center gap-2">
              <TouchableOpacity
                onPress={handleClose.bind(null, resetForm)}
                className="border-[#0EA5E9] border rounded-lg p-4 mb-4 w-6/12 items-center justify-center"
              >
                <Text className="text-[#05243E] text-center text-lg">
                  Fechar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleSubmit as any}
                className="bg-[#0EA5E9] rounded-lg p-4 mb-4 w-6/12 items-center justify-center"
              >
                <Text className="text-white text-center text-lg">Salvar</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
