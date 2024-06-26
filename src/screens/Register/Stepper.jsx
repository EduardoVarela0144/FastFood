import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ROLES, ROLES_TRANSLATE } from "../../config";
import Step1 from "./Step1";
import Step2 from "./Step2";
import useUploadFile from "../../hooks/Images/useUploadFile";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAddUser } from "../../hooks/Users/useAddUser";


export default function Stepper() {

  const { addUser } = useAddUser();

  const route = useRoute();
  const { rol } = route.params;
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
    rol: rol,
  });


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
      formData.rol = rol;
      console.log(formData);
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

  const handleFieldChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { title: "Información general", completed: currentStep >= 1 },
    {
      title: `Perfil ${rol === ROLES.student ? "estudiantil" : "de vendedor"}`,
      completed: currentStep >= 2,
    },
  ];

  const changeStep = (step) => {
    setCurrentStep(step);
  };

  const renderCurrentStepComponent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1 formData={formData} handleFieldChange={handleFieldChange} />
        );
      case 2:
        return (
          <Step2
            bottomSheetRef={bottomSheetRef}
            formData={formData}
            handleFieldChange={handleFieldChange}
            rol={rol}
          />
        );
      default:
        return null;
    }
  };

  const { bottomSheetRef, BottomSheetr, urlImageFinal, LoadingModal } =
    useUploadFile(true, true);

  useEffect(() => {
    if (urlImageFinal) {
      handleFieldChange("profilePicture", urlImageFinal);
    }
  }, [urlImageFinal]);

  return (
    <GestureHandlerRootView className="flex flex-1 px-4 pt-12">
      <SafeAreaView className="justify-center flex-1 p-2">
        <Text className="font-semibold text-4xl">
          Completa tu registro como
          <Text className="font-bold text-[#3a6ea6]">
            {" "}
            {ROLES_TRANSLATE[rol]}
          </Text>
        </Text>
        <View className="flex-1  py-4 space-y-4">
          <View className="flex flex-row">
            {steps.map((step, index) => (
              <View
                key={index}
                className="flex items-center justify-center flex-row "
              >
                <TouchableOpacity
                  onPress={() => changeStep(index + 1)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    step.completed ? "border-[#3a6ea6]" : "border-gray-300"
                  } items-center justify-center`}
                >
                  <Text>{index + 1}</Text>
                </TouchableOpacity>
                {index < steps.length - 1 && (
                  <View
                    className={`h-2 w-16 ${
                      step.completed ? "bg-[#3a6ea6]" : "bg-gray-300"
                    }`}
                  ></View>
                )}
              </View>
            ))}
          </View>
          <View className="flex-1 ">
            <Text>{steps[currentStep - 1].title}</Text>
            {renderCurrentStepComponent()}
          </View>
        </View>
        <View className="absolute bottom-4 right-0 index-[100]">
          <TouchableOpacity
            className="bg-[#3a6ea6] w-20 h-20 rounded-full items-center justify-center"
            onPress={() => {
              currentStep < steps.length
                ? changeStep(
                    currentStep < steps.length ? currentStep + 1 : currentStep
                  )
                : saveUser();
            }}
          >
            <MaterialCommunityIcons
              name="arrow-right"
              size={36}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
        <BottomSheetr />
        <LoadingModal />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
