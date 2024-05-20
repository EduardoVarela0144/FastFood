import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AuthContext } from "../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLogin } from "../../hooks/Users/useLogin";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const { postLogin } = useLogin();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { setAuth } = useContext(AuthContext);

  const retrieveAuthentication = async () => {
    try {
      const storedUserInfo = await AsyncStorage.getItem("@user");
      if (storedUserInfo) {
        const userInfo = JSON.parse(storedUserInfo);
        setAuth(userInfo);
      }
    } catch (error) {
      console.error(
        "Error al recuperar la autenticación desde AsyncStorage",
        error
      );
    }
  };

  useEffect(() => {
    retrieveAuthentication();
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    postLogin(formData);
  };

  const handleFieldChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  return (
    <View className="items-center flex flex-1 bg-[#3a6ea6] " >
      <View className="w-full flex-1 ">
        <Text className="text-white font-bold mt-16 text-center text-3xl">
          UniFoods
        </Text>

        <View className="w-full flex-1">
          <Lottie
            autoPlay
            loop
            resizeMode="cover"
            style={{ flex: 1 }}
            source={require("../../animations/LoginAnimation.json")}
          />
        </View>
      </View>
      <KeyboardAvoidingView
        className="w-full"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View className="w-full flex-1 items-center  px-10 bg-slate-100">
          <View className="w-full  justify-center space-y-6 mt-8">
            <Text className="font-bold text-2xl">Inicio de sesión</Text>
            <View className="space-y-1">
              <Text className="font-bold text-gray-400">
                Correo electrónico
              </Text>
              <TextInput
                autoCapitalize="none"
                placeholder="Correo electrónico"
                className="border border-1 bg-white border-white rounded-xl w-full py-3 px-2"
                value={formData.email}
                onChangeText={(text) => handleFieldChange("email", text)}
              />
            </View>
            <View className="space-y-1">
              <Text className="font-bold text-gray-400 ">Contraseña</Text>

              <View>
                <TextInput
                  placeholder="Contraseña"
                  className="border border-1 bg-white border-white rounded-xl w-full py-3 px-2"
                  secureTextEntry={!showPassword}
                  value={formData.password}
                  onChangeText={(text) => handleFieldChange("password", text)}
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

            <TouchableOpacity
              onPress={() => login()}
              className="bg-[#3a6ea6] rounded-full w-full items-center py-2"
            >
              <Text className="text-white font-bold text-xl">
                Iniciar sesión
              </Text>
            </TouchableOpacity>

            <View className="font-bold flex flex-row space-x-2 justify-center">
              <Text>¿Aún no tienes cuenta?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text className="font-bold text-[#3a6ea6]">Registrarme</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
