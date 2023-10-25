import React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View className="items-center flex flex-1">
      <View className="w-full flex-1 bg-amber-400">
        <Lottie
          autoPlay
          loop
          resizeMode="cover"
          style={{ flex: 1 }}
          source={require("../animations/LoginAnimation.json")}
        />
      </View>
      <View className="w-full flex-1 items-center  px-10">
        <View className="w-full  justify-center space-y-6 mt-8">
          <Text className="font-bold text-2xl">Inicio de sesión</Text>
          <View className="space-y-1">
            <Text className="font-bold text-gray-400">Correo electrónico</Text>
            <TextInput
              placeholder="Correo electrónico"
              className="border border-1 bg-white border-white rounded-xl w-full py-3 px-2"
            />
          </View>
          <View className="space-y-1">
            <Text className="font-bold text-gray-400">Contraseña</Text>
            <TextInput
              placeholder="Contraseña"
              className="border border-1 bg-white border-white rounded-xl w-full py-3 px-2"
            />
          </View>

          <TouchableOpacity className="bg-orange-500 rounded-full w-full items-center py-2">
            <Text className="text-white font-bold text-xl">Iniciar sesión</Text>
          </TouchableOpacity>

          <View className="font-bold flex flex-row space-x-2 justify-center">
            <Text>¿Aún no tienes cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text className="font-bold text-orange-500">Registrarme</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
