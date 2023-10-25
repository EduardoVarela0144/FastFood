import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ROLES_TRANSLATE } from "../../config";
import { ROLES } from "../../config";
import Lottie from "lottie-react-native";

export default function RegisterInfo({ screenWidth, user }) {
  return (
    <View
      className="flex-1 justify-center items-center space-y-8 py-4 "
      style={{ width: screenWidth }}
    >
      <View className="w-full px-4">
        <Text className="font-bold text-4xl">
          Regístrate como {ROLES_TRANSLATE[user]}
        </Text>
      </View>
      {user === ROLES.student ? (
        <View className="flex-1  w-full">
          <View className="flex-1">
            <Lottie
              autoPlay
              loop
              resizeMode="cover"
              style={{ flex: 1 }}
              source={require("../../animations/Student.json")}
            />
          </View>
          <View className="px-4">
            <Text>
              Bienvenido a nuestra aplicación de comida, donde podrás descubrir
              deliciosos platillos y opciones de alimentos cerca de tu campus.
            </Text>
          </View>
        </View>
      ) : (
        <View className="flex-1 w-full">
          <View className="flex-1">
            <Lottie
              autoPlay
              loop
              resizeMode="cover"
              style={{ flex: 1 }}
              source={require("../../animations/Seller.json")}
            />
          </View>
          <View className="px-4">
            <Text>
              ¿Tienes un negocio de comida y quieres llegar a una audiencia más
              amplia? Únete como vendedor en nuestra plataforma y comparte tus
              deliciosos platillos con la comunidad local.
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
