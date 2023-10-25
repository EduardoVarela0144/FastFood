import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Stepper() {
  const route = useRoute();
  const { rol } = route.params;
  return (
    <SafeAreaView>
      <Text>Hola mundo {rol}</Text>
    </SafeAreaView>
  );
}
