import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PageLayout from "../../components/General/PageLayout";
import { usePostProduct } from "../../hooks/Products/usePostPorduct";
import { requiredProductFieldsTranslate } from "../../config";
import { useGetAllUsers } from "../../hooks/Users/useGetAllUsers";
import { Dropdown } from "react-native-element-dropdown";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    image: "",
    description: "",
    seller: "",
  });

  const { postProduct, isLoading } = usePostProduct();

  const handleFieldChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const sendForm = () => {
    const requiredFields = [
      "name",
      "price",
      "quantity",
      "image",
      "description",
      "seller",
    ];

    const missingFields = requiredFields.filter(
      (fieldName) => !formData[fieldName]
    );

    if (missingFields.length === 0) {
      postProduct(formData);
      if (!isLoading) {
        formData.name = "";
        formData.price = "";
        formData.image = "";
        formData.quantity = "";
        formData.description = "";
        formData.seller = "";
      }
    } else {
      const translatedMissingFields = missingFields.map(
        (fieldName) => requiredProductFieldsTranslate[fieldName]
      );
      const missingFieldsMessage = `Por favor complete los siguientes campos: ${translatedMissingFields.join(
        ", "
      )}`;
      Alert.alert("Campos faltantes", missingFieldsMessage);
    }
  };

  const { data } = useGetAllUsers();

  const formattedData = Array.isArray(data)
    ? data.map((item) => ({
        label: item.firstName,
        value: item._id,
      }))
    : [];

  return (
    <PageLayout>
      <TouchableOpacity
        activeOpacity={1}
        className=" justify-center items-center"
        onPress={() => Keyboard.dismiss()}
      >
        <SafeAreaView className="px-4 w-full h-full">
          <View className=" rounded-xl px-4 w-full h-auto shadow-xl items-center justify-center space-y-4 ">
            <View className="space-y-2 w-full">
              <Text className="font-bold ">Nombre del producto</Text>
              <TextInput
                className="border border-1 border-amber-500 rounded-lg w-full h-8 px-2"
                value={formData.name}
                onChangeText={(text) => handleFieldChange("name", text)}
              />
            </View>
            <View className="space-y-2 w-full">
              <Text className="font-bold">Precio</Text>
              <TextInput
                className="border border-1 border-amber-500 rounded-lg w-full h-8 px-2"
                keyboardType="numeric"
                value={formData.price}
                onChangeText={(text) => handleFieldChange("price", text)}
              />
            </View>
            <View className="space-y-2 w-full">
              <Text className="font-bold">Url de la imagen</Text>
              <TextInput
                className="border border-1 border-amber-500 rounded-lg w-full h-8 px-2"
                value={formData.image}
                onChangeText={(text) => handleFieldChange("image", text)}
              />
            </View>
            <View className="space-y-2 w-full">
              <Text className="font-bold">Cantidad disponible</Text>
              <TextInput
                className="border border-1 border-amber-500 rounded-lg w-full h-8 px-2"
                keyboardType="numeric"
                value={formData.quantity}
                onChangeText={(text) => handleFieldChange("quantity", text)}
              />
            </View>
            <View className="space-y-2 w-full">
              <Text className="font-bold">Descripcion</Text>
              <TextInput
                className="border border-1 border-amber-500 rounded-lg w-full h-16 px-2"
                value={formData.description}
                onChangeText={(text) => handleFieldChange("description", text)}
              />
            </View>
            <View className="space-y-2 w-full">
              <Text className="font-bold">Vendedor</Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={formattedData}
                labelField="label"
                valueField="value"
                placeholder="Selecciona un usuario"
                selectedStyle={styles.selectedStyle}
                itemTextStyle={{ fontSize: 13, padding: 0 }}
                value={formData.seller}
                onChange={(item) => handleFieldChange("seller", item.value)}
              />
            </View>
            <TouchableOpacity
              className="bg-amber-400 rounded-full w-full items-center justify-center"
              onPress={sendForm}
            >
              <Text className="font-bold text-white text-md py-4 w-full text-center flex justify-center">
                Agregar Producto
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    height: 45,
    borderColor: "#f59f0b",
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 8,
    width: "100%",
  },
  placeholderStyle: {
    fontSize: 14,
    color: "gray",
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  selectedStyle: {
    borderRadius: 10,
    borderColor: "#ff4242",
  },
});
