import React, { useState } from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import PageLayout from "../../components/General/PageLayout";
import { TextInput, Button } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { requiredFieldsTranslate } from "../../config";
import { useAddUser } from "../../hooks/Users/useAddUser";
import { ROLES } from "../../config";

export default function AddUser() {
  const { addUser } = useAddUser();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    password: "",
    registrationNumber: "",
    accountNumber: "",
    profilePicture: "",
    major: "",
    building: "",
    rol: ROLES.admin,
  });

  const handleFieldChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const saveUser = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "middleName",
      "email",
      "password",
    ];

    const missingFields = requiredFields.filter(
      (fieldName) => !formData[fieldName]
    );

    if (missingFields.length === 0) {
      addUser(formData).then(() => {
        setFormData({
          firstName: "",
          lastName: "",
          middleName: "",
          email: "",
          password: "",
          registrationNumber: "",
          accountNumber: "",
          profilePicture: "",
          major: "",
          building: "",
          rol: "",
        });
      });
    } else {
      const translatedMissingFields = missingFields.map(
        (fieldName) => requiredFieldsTranslate[fieldName]
      );
      const missingFieldsMessage = `Por favor complete los siguientes campos: ${translatedMissingFields.join(
        ", "
      )}`;
      Alert.alert("Campos faltantes", missingFieldsMessage);
    }
  };

  return (
    <PageLayout>
      <View className="flex-1 px-4 space-y-8">
        <View className="space-y-1">
          <Text className="font-bold ">Nombre</Text>
          <TextInput
            autoCapitalize="none"
            mode="outlined"
            selectionColor="#3a6ea6"
            outlineColor="#3a6ea6"
            activeOutlineColor="#3a6ea6"
            placeholder="Nombre"
            className="border border-1 bg-white border-white rounded-xl w-full  px-2"
            value={formData.firstName}
            onChangeText={(text) => handleFieldChange("firstName", text)}
          />
        </View>
        <View className="space-y-1">
          <Text className="font-bold ">Apellido paterno</Text>
          <TextInput
            autoCapitalize="none"
            mode="outlined"
            selectionColor="#3a6ea6"
            outlineColor="#3a6ea6"
            activeOutlineColor="#3a6ea6"
            placeholder="Apellido paterno"
            className="border border-1 bg-white border-white rounded-xl w-full  px-2"
            value={formData.lastName}
            onChangeText={(text) => handleFieldChange("lastName", text)}
          />
        </View>
        <View className="space-y-1">
          <Text className="font-bold ">Apellido materno</Text>
          <TextInput
            autoCapitalize="none"
            mode="outlined"
            selectionColor="#3a6ea6"
            outlineColor="#3a6ea6"
            activeOutlineColor="#3a6ea6"
            placeholder="Apellido materno"
            className="border border-1 bg-white border-white rounded-xl w-full  px-2"
            value={formData.middleName}
            onChangeText={(text) => handleFieldChange("middleName", text)}
          />
        </View>
        <View className="space-y-1">
          <Text className="font-bold ">Correo</Text>
          <TextInput
            autoCapitalize="none"
            mode="outlined"
            selectionColor="#3a6ea6"
            outlineColor="#3a6ea6"
            activeOutlineColor="#3a6ea6"
            placeholder="Correo"
            className="border border-1 bg-white border-white rounded-xl w-full  px-2"
            value={formData.email}
            onChangeText={(text) => handleFieldChange("email", text)}
          />
        </View>
        <View className="space-y-1">
          <Text className="font-bold ">Contraseña</Text>

          <View>
            <TextInput
              autoCapitalize="none"
              mode="outlined"
              selectionColor="#3a6ea6"
              outlineColor="#3a6ea6"
              activeOutlineColor="#3a6ea6"
              placeholder="Contraseña"
              className="border border-1 bg-white border-white rounded-xl w-full  px-2"
              secureTextEntry={!showPassword}
              value={formData.password}
              onChangeText={(text) => handleFieldChange("password", text)}
            />
            <TouchableOpacity
              className="absolute right-2 top-4"
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
        <View className="space-y-1">
          <Button
            mode="contained"
            buttonColor="#3a6ea6"
            onPress={() => saveUser()}
          >
            Crear nuevo usuario
          </Button>
        </View>
      </View>
    </PageLayout>
  );
}
