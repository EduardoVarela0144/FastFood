import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Step1() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View className="my-8 space-y-6">
      <View className="space-y-1">
        <Text className="font-bold ">Nombre</Text>
        <TextInput
          placeholder="Nombre"
          className="border border-1 bg-white border-white rounded-xl w-full py-3 px-2"
        />
      </View>
      <View className="space-y-1">
        <Text className="font-bold ">Apellido paterno</Text>
        <TextInput
          placeholder="Apellido paterno"
          className="border border-1 bg-white border-white rounded-xl w-full py-3 px-2"
        />
      </View>
      <View className="space-y-1">
        <Text className="font-bold ">Apellido materno</Text>
        <TextInput
          placeholder="Apellido materno"
          className="border border-1 bg-white border-white rounded-xl w-full py-3 px-2"
        />
      </View>
      <View className="space-y-1">
        <Text className="font-bold ">Correo</Text>
        <TextInput
          placeholder="Correo"
          className="border border-1 bg-white border-white rounded-xl w-full py-3 px-2"
        />
      </View>
      <View className="space-y-1">
        <Text className="font-bold ">Contraseña</Text>

        <View>
          <TextInput
            placeholder="Contraseña"
            className="border border-1 bg-white border-white rounded-xl w-full py-3 px-2"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            className="absolute right-2 top-2"
            onPress={togglePasswordVisibility}
          >
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
