import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
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

  return (
    <SafeAreaView className="flex-1">
      <View className="flex w-full  px-2">
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
      <View className="items-center">
        <Pagination currentPage={currentPage} numScreens={numScreens} />
      </View>
    </SafeAreaView>
  );
}
