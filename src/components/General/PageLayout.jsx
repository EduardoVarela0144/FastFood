import React, { useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PageLayout({ child, color }) {
  const { Auth, setAuth } = useContext(AuthContext);
  const keyToRemove = "@user";

  const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log(`Elemento con clave "${key}" eliminado de AsyncStorage.`);
    } catch (error) {
      console.error("Error al eliminar el elemento de AsyncStorage:", error);
    }
  };

  const logout = () => {
    setAuth(null);
    removeData(keyToRemove);
  };

  return (
    <SafeAreaView
      className={`${color === "yellow" && "bg-amber-400"} h-full pt-12`}
    >
      <View className="rounded-md bg-white flex-row justify-between mx-2 px-2 py-3 shadow-xl">
        <TouchableOpacity onPress={() => logout()}>
          <MaterialCommunityIcons name={"logout"} size={30} color="gray" />
        </TouchableOpacity>
        <Text className="font-bold text-2xl">
          Bienvenido, {Auth.firstName} 👋🏻
        </Text>
      </View>
      <View className="flex-1">{child}</View>
    </SafeAreaView>
  );
}
