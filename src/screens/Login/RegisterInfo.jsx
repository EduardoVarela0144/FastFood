import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ROLES_TRANSLATE } from "../../config";
import { ROLES } from "../../config";

export default function RegisterInfo({ screenWidth, user }) {
  return (
    <View
      className="flex-1 justify-center items-center p-4 space-y-4"
      style={{ width: screenWidth }}
    >
      <View className="w-full">
        <Text className="font-bold text-4xl">
          Regístrate como {ROLES_TRANSLATE[user]}
        </Text>
      </View>
      {user === ROLES.student ? (
        <View>
          <Text>
            Bienvenido a nuestra aplicación de comida, donde podrás descubrir
            deliciosos platillos y opciones de alimentos cerca de tu campus.
          </Text>
        </View>
      ) : (
        <View>
          <Text>
            ¿Tienes un negocio de comida y quieres llegar a una audiencia más
            amplia? Únete como vendedor en nuestra plataforma y comparte tus
            deliciosos platillos con la comunidad local.
          </Text>
        </View>
      )}
      <TouchableOpacity className="bg-orange-500 rounded-full py-2 px-4">
        <Text className="text-white font-bold text-lg">Comenzar ahora</Text>
      </TouchableOpacity>
    </View>
  );
}
