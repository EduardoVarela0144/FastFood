import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import Pagination from "../../components/Register/Pagination";
import RegisterInfo from "./RegisterInfo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ROLES } from "../../config";

const screenWidth = Dimensions.get("window").width;
const numScreens = 2;

export default function Register() {
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const onScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.floor(offsetX / screenWidth);
    setCurrentPage(page);
  };
  const navigation = useNavigation();

  const role = [ROLES.student, ROLES.seller];

  return (
    <SafeAreaView className="flex-1 py-12">
      <View className="flex w-full px-4">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-white w-10 h-10 rounded-full items-center justify-center"
        >
          <MaterialCommunityIcons name="arrow-left" size={22} color={"black"} />
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={200}
      >
        <RegisterInfo screenWidth={screenWidth} user={ROLES.student} />
        <RegisterInfo screenWidth={screenWidth} user={ROLES.seller} />
      </ScrollView>
      <View className="space-y-6">
        <View className="px-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("Stepper", { rol: role[currentPage] })}
            className="bg-[#3a6ea6] rounded-full py-2 px-4 items-center"
          >
            <Text className="text-white font-bold text-lg">Comenzar ahora</Text>
          </TouchableOpacity>
        </View>
        <View className="items-center">
          <Pagination currentPage={currentPage} numScreens={numScreens} />
        </View>
      </View>
    </SafeAreaView>
  );
}
