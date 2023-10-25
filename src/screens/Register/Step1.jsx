import React from "react";
import { View, TextInput, Text } from "react-native";
export default function Step1() {
  return (
    <View className="my-8">
      <View className="space-y-1">
        <Text className="font-bold ">Contraseña</Text>
        <TextInput
          placeholder="Contraseña"
          className="border border-1 bg-white border-white rounded-xl w-full py-3 px-2"
        />
      </View>
    </View>
  );
}
