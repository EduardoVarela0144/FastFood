import React from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ROLES_TRANSLATE } from "../../config";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Stepper() {
  const route = useRoute();
  const { rol } = route.params;
  return (
    <SafeAreaView className="flex flex-1  px-4">
      <View className="px-4 justify-center flex-1 ">
        <Text className="font-semibold text-4xl">
          Completa tu registro como
          <Text className="font-bold text-orange-500">
            {" "}
            {ROLES_TRANSLATE[rol]}
          </Text>
        </Text>
        <View className=" flex-1">
          <Text>h</Text>
        </View>
        <View className=" items-center">
          <TouchableOpacity
            className="bg-white w-20 h-20 rounded-full items-center justify-center"
          >
            <MaterialCommunityIcons
              name="arrow-right"
              size={36}
              color={"black"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
