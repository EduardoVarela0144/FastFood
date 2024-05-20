import React, { useState } from "react";

import { Text, View } from "react-native";
import PageLayout from "../../components/General/PageLayout";
export default function EditUser() {
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
    rol: "",
  });
  return (
    <PageLayout>
      <View className=" h-full items-center justify-center">
        <Text className="text-2xl">Estamos trabajando ...</Text>
      </View>
    </PageLayout>
  );
}
