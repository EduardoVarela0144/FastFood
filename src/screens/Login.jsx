import React from "react";
import { SafeAreaView, Text, View, Dimensions } from "react-native";
import Lottie from "lottie-react-native";

export default function Login() {
  return (
    <View className="items-center">
      <Lottie
        autoPlay
        loop
        style={{ width: 400, height: 400 }}
        source={require("../animations/Cart.json")}
      />
      <Text className="font-semibold text-xl text-center absolute mt-20">
        Aun no tienes productos en el carrito 😖
      </Text>
    </View>
  );
}
