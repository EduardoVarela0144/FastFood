import React from "react";
import { View, Text } from "react-native";
import { ROLES_TRANSLATE } from "../../config";

export default function RegisterInfo({ screenWidth, user }) {
  return (
    <View
      className="flex-1 justify-center items-center p-4"
      style={{ width: screenWidth }}
    >
      <View className=" flex-1 w-full items-center justify-center">
        <Text className="font-bold text-4xl">Registrate como {ROLES_TRANSLATE[user]}</Text>
      </View>
    </View>
  );
}
