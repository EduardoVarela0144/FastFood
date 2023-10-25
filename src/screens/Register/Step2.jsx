import React from "react";
import { View, TextInput, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { ROLES } from "../../config";
import { DEGREES } from "../../config";
import { BUILDINGS } from "../../config";
import { Dropdown } from "react-native-element-dropdown";
import { Avatar } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Step2({ rol, formData, handleFieldChange }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="mt-8 space-y-6 "
      contentContainerStyle={{ paddingBottom: 200 }}
    >
      <View className="space-y-1 items-center ">
        <View>
          <Avatar
            label="Eduardo Varela"
            color="#F59E0B"
            tintColor="white"
            size={100}
          />
            <TouchableOpacity
            className="absolute right-0 bottom-0 bg-white rounded-full h-8 w-8 items-center justify-center shadow-xl"
          >
            <MaterialCommunityIcons
              name="camera"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="space-y-1">
        <Text className="font-bold ">Matrícula</Text>
        <TextInput
          placeholder="Matrícula"
          className="border border-1 bg-white border-white rounded-xl w-full py-3 px-2"
          value={formData.registrationNumber}
          onChangeText={(text) => handleFieldChange("registrationNumber", text)}
        />
      </View>
      {rol === ROLES.seller && (
        <View className="space-y-1">
          <Text className="font-bold ">Número de cuenta bancaria</Text>
          <TextInput
            placeholder="Número de cuenta bancaria"
            className="border border-1 bg-white border-white rounded-xl w-full py-3 px-2"
            value={formData.accountNumber}
            onChangeText={(text) => handleFieldChange("accountNumber", text)}
          />
        </View>
      )}
      <View className="space-y-1">
        <Text className="font-bold ">Carrera</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={DEGREES}
          labelField="label"
          valueField="value"
          placeholder="Selecciona tu carrera"
          selectedStyle={styles.selectedStyle}
          itemTextStyle={{ fontSize: 13, padding: 0 }}
          value={formData.major}
          onChange={(text) => handleFieldChange("major", text)}
        />
      </View>
      <View className="space-y-1">
        <Text className="font-bold ">Edificio</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={BUILDINGS}
          labelField="label"
          valueField="value"
          placeholder="Selecciona tu edificio"
          selectedStyle={styles.selectedStyle}
          itemTextStyle={{ fontSize: 13, padding: 0 }}
          value={formData.building}
          onChange={(text) => handleFieldChange("building", text)}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  dropdown: {
    height: 45,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
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
