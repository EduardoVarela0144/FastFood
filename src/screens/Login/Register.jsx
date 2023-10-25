import React, { useState, useRef } from "react";
import { View, ScrollView, Dimensions, Text, SafeAreaView } from "react-native";
import Pagination from "../../components/Register/Pagination";
import RegisterInfo from "./RegisterInfo";
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

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={200}
      >
        <RegisterInfo screenWidth={screenWidth} />
        <RegisterInfo screenWidth={screenWidth} />
      </ScrollView>
      <View className="items-center">
        <Pagination currentPage={currentPage} numScreens={numScreens} />
      </View>
    </SafeAreaView>
  );
}
