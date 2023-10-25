import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PageLayout from "../../components/General/PageLayout";

export default function AddProduct() {
  const [nombre, setNombre] = useState();
  const [cantidad, setCantidad] = useState();
  const [precio, setPrecio] = useState();
  const [urlImagen, setUrlImagen] = useState();
  const [descripcion, setDescipcion] = useState();

  const handlePostRequest = async () => {
    alert("Agrega el producto");
  };

  const sendForm = () => {
    if (nombre && cantidad && precio && urlImagen && descripcion) {
      handlePostRequest();
    } else {
      alert("Necesitar rellenar todos los campos");
    }
  };

  return (
    <PageLayout>
      <TouchableOpacity
        activeOpacity={1}
        className=" justify-center items-center"
        onPress={() => Keyboard.dismiss()}
      >
        <SafeAreaView className="px-4 w-full h-full">
         
          <View className=" rounded-xl px-4 w-full h-auto shadow-xl items-center justify-center space-y-6 ">
          <Text className="font-bold text-xl text-amber-400">
            Agregar nuevo producto
          </Text>
            <View className="space-y-2 w-full">
              <Text className="font-bold ">Nombre del producto</Text>
              <TextInput
                className="border border-1 border-amber-500 rounded-xl w-full h-8 px-2"
                value={nombre}
                onChangeText={(text) => setNombre(text)}
              />
            </View>
            <View className="space-y-2 w-full">
              <Text className="font-bold">Precio</Text>
              <TextInput
                className="border border-1 border-amber-500 rounded-xl w-full h-8 px-2"
                keyboardType="numeric"
                value={precio}
                onChangeText={(text) => setPrecio(text)}
              />
            </View>
            <View className="space-y-2 w-full">
              <Text className="font-bold">Url de la imagen</Text>
              <TextInput
                className="border border-1 border-amber-500 rounded-xl w-full h-8 px-2"
                value={urlImagen}
                onChangeText={(text) => setUrlImagen(text)}
              />
            </View>
            <View className="space-y-2 w-full">
              <Text className="font-bold">Cantidad disponible</Text>
              <TextInput
                className="border border-1 border-amber-500 rounded-xl w-full h-8 px-2"
                keyboardType="numeric"
                value={cantidad}
                onChangeText={(text) => setCantidad(text)}
              />
            </View>
            <View className="space-y-2 w-full">
              <Text className="font-bold">Descripcion</Text>
              <TextInput
                className="border border-1 border-amber-500 rounded-xl w-full h-16 px-2"
                value={descripcion}
                onChangeText={(text) => setDescipcion(text)}
              />
            </View>
            <View className="bg-amber-400 rounded-full w-full items-center py-4">
              <TouchableOpacity onPress={sendForm}>
                <Text className="font-bold text-white text-md">
                  Agregar Producto
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    </PageLayout>
  );
}
