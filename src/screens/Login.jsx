import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Lottie from "lottie-react-native";

export default function Login() {
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
      <View className="w-full flex-1 items-center justify-center">
        <View className="w-full px-10">
          <TouchableOpacity className="bg-orange-500 rounded-full w-full items-center py-2">
            <Text className="text-white font-bold text-xl">Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
