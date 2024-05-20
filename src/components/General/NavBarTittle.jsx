import { View, Text, SafeAreaView, Platform, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NavBarTittle = ({title}) => {
  const navigation = useNavigation()

  return (
    <SafeAreaView className={`w-full z-10 ${Platform.OS !== "ios" ? "mt-3" : "absolute"}`} >
      <View className={`flex-row px-4 justify-between items-center ${Platform.OS !== "ios" && "pb-2"}`} >
        <Pressable
          className="bg-white p-2 rounded-full"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            color={"black"}
            size={20}
          />
        </Pressable>
        <View
          className={`bg-white p-2 px-4 goBack rounded-full ${Platform.OS === "android" && "mt-4"
            }`}
        >
          <Text className="font-semibold">{title}</Text>
        </View>
          <Text className="text-gray-400 p-2">
            <MaterialCommunityIcons
              name="heart"
              size={20}
              color={"transparent"}
            />
          </Text>
      </View>
    </SafeAreaView>
  )
}

export default NavBarTittle