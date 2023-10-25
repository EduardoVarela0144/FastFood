import React from "react";
import { View, TextInput, Text, ScrollView } from "react-native";
import { ROLES } from "../../config";
export default function Step2({ rol }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="mt-8 space-y-6 "
      contentContainerStyle={{ paddingBottom: 200 }}
    >
      <View className="space-y-1">
        <Text className="font-bold ">Matrícula</Text>
        <TextInput
          placeholder="Matrícula"
          className="border border-1 bg-white border-white rounded-xl w-full py-3 px-2"
        />
      </View>
      {rol === ROLES.seller && (
        <View className="space-y-1">
          <Text className="font-bold ">Número de cuenta bancaria</Text>
          <TextInput
            placeholder="Número de cuenta bancaria"
            className="border border-1 bg-white border-white rounded-xl w-full py-3 px-2"
          />
        </View>
      )}
      <View className="space-y-1">
        <Text className="font-bold ">Carrera</Text>
        <TextInput
          placeholder="Apellido materno"
          className="border border-1 bg-white border-white rounded-xl w-full py-3 px-2"
        />
      </View>
      <View className="space-y-1">
        <Text className="font-bold ">Edificio</Text>
        <TextInput
          placeholder="Correo"
          className="border border-1 bg-white border-white rounded-xl w-full py-3 px-2"
        />
      </View>
    </ScrollView>
  );
}
