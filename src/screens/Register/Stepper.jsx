import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ROLES, ROLES_TRANSLATE } from "../../config";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useSignUp } from "../../hooks/Users/useSignUp";

export default function Stepper() {
  const { postSignUp } = useSignUp();
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
            formData={formData}
            handleFieldChange={handleFieldChange}
            rol={rol}
          />
        );
      default:
        return null;
    }
  };

  const saveUser = () => {
    postSignUp(formData);
  };

  return (
    <SafeAreaView className="flex flex-1 px-4">
      <View className=" justify-center flex-1 p-2">
        <Text className="font-semibold text-4xl">
          Completa tu registro como
          <Text className="font-bold text-orange-500">
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
                    step.completed ? "border-orange-500" : "border-gray-300"
                  } items-center justify-center`}
                >
                  <Text>{index + 1}</Text>
                </TouchableOpacity>
                {index < steps.length - 1 && (
                  <View
                    className={`h-2 w-16 ${
                      step.completed ? "bg-orange-500" : "bg-gray-300"
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
        <View className="items-end">
          <TouchableOpacity
            className="bg-white w-20 h-20 rounded-full items-center justify-center"
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
              color={"black"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
