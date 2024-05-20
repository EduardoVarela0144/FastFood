import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PageLayout from "../../components/General/PageLayout";
import { usePostProduct } from "../../hooks/Products/usePostPorduct";
import { requiredProductFieldsTranslate } from "../../config";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useUploadFile from "../../hooks/Images/useUploadFile";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function SellerAddProduct() {
  const { Auth } = useContext(AuthContext);

  const user = Auth._id;

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    image: "",
    description: "",
    seller: user,
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
      postProduct(formData).then(() => {
        setFormData({
          name: "",
          price: "",
          quantity: "",
          image: "",
          description: "",
          seller: "",
        });
      });
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

  const { bottomSheetRef, BottomSheetr, urlImageFinal, LoadingModal } =
    useUploadFile(true, true);

  useEffect(() => {
    if (urlImageFinal) {
      handleFieldChange("image", urlImageFinal);
    }
  }, [urlImageFinal]);

  return (
    <PageLayout>
      <TouchableOpacity
        activeOpacity={1}
        className=" justify-center items-center"
        onPress={() => Keyboard.dismiss()}
      >
        <GestureHandlerRootView className="flex w-full h-full">
          <SafeAreaView className="rounded-xl px-4 w-full  shadow-xl items-center justify-center space-y-2 flex-1">
            <View className="space-y-2 w-full">
              {formData.image ? (
                <View className="items-center justify-center py-4">
                  <Image
                    source={{ uri: formData?.image }}
                    className="aspect-video h-44 w-full rounded-md"
                  />
                </View>
              ) : (
                <TouchableOpacity
                  className=" items-center justify-center py-4"
                  onPress={() => bottomSheetRef.current?.expand()}
                >
                  <Image
                    src={
                      "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
                    }
                    className="aspect-video h-44 w-full rounded-md"
                  />
                </TouchableOpacity>
              )}
            </View>
            <View className="space-y-2 w-full">
              <Text className="font-bold ">Nombre del producto</Text>
              <TextInput
                className="border border-1 border-[#3a6ea6] rounded-lg w-full h-8 px-2"
                value={formData.name}
                onChangeText={(text) => handleFieldChange("name", text)}
              />
            </View>
            <View className="space-y-2 w-full">
              <Text className="font-bold">Precio</Text>
              <TextInput
                className="border border-1 border-[#3a6ea6] rounded-lg w-full h-8 px-2"
                keyboardType="numeric"
                value={formData.price}
                onChangeText={(text) => handleFieldChange("price", text)}
              />
            </View>

            <View className="space-y-2 w-full">
              <Text className="font-bold">Cantidad disponible</Text>
              <TextInput
                className="border border-1 border-[#3a6ea6] rounded-lg w-full h-8 px-2"
                keyboardType="numeric"
                value={formData.quantity}
                onChangeText={(text) => handleFieldChange("quantity", text)}
              />
            </View>
            <View className="space-y-2 w-full">
              <Text className="font-bold">Descripcion</Text>
              <TextInput
                className="border border-1 border-[#3a6ea6] rounded-lg w-full h-16 px-2"
                value={formData.description}
                onChangeText={(text) => handleFieldChange("description", text)}
              />
            </View>
            <View className="hidden">
              <TextInput
                className="border border-1 border-[#3a6ea6] rounded-lg w-full h-16 px-2"
                value={formData.seller}
                onChangeText={(text) => handleFieldChange("seller", text)}
              />
            </View>
            <TouchableOpacity
              className="bg-[#3a6ea6] rounded-full w-full items-center justify-center"
              onPress={sendForm}
            >
              <Text className="font-bold text-white text-md py-4 w-full text-center flex justify-center">
                Agregar Producto
              </Text>
            </TouchableOpacity>
            <BottomSheetr />
            <LoadingModal />
          </SafeAreaView>
        </GestureHandlerRootView>
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
