import React, { useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartContext } from "../../context/CartContext";

export default function PageLayout({ children, color }) {
  const { Auth, setAuth } = useContext(AuthContext);
  const { setCart } = useContext(CartContext);

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
    Alert.alert(
      "Cerrar sesión",
      "¿Estás seguro que deseas cerrar sesión?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Cerrar sesión",
          onPress: () => {
            removeData(keyToRemove);
            setAuth(null);
            setCart([]);
          },
        },
      ],
      { cancelable: false }
    )
  };

  return (
    <SafeAreaView
      className={`bg-slate-50 h-full pt-12`}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <View className="flex-row justify-between items-center mx-2 px-4 py-3 shadow-xl">
            <View>
              <Text className="self-start">
                Bienvenido de nuevo,
              </Text>
              <Text className="font-bold text-2xl self-start">
                {Auth.firstName}
              </Text>
            </View>
            <Text />
            <TouchableOpacity onPress={() => logout()}>
              <MaterialCommunityIcons name={"logout"} size={30} color="gray" />
            </TouchableOpacity>

          </View>
          <View className="flex-1">{children}</View>
        </>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
