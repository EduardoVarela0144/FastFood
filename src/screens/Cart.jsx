import { Text, SafeAreaView, Button, View, FlatList } from "react-native";
import { useContext, useEffect, useState } from "react";
import Cards_Products from "../components/Cards_Products";
import { CartContext } from "../context/CartContext";
import Lottie from "lottie-react-native";
export default function Cart() {
  const { Cart, setCart } = useContext(CartContext);
  return (
    <SafeAreaView className="flex-1 flex">
      <View className="px-4 flex-1">
        <Text className="font-bold text-2xl">Carrito de compras</Text>
        <FlatList
          data={Cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (<Cards_Products item={item} />) }
          ListEmptyComponent={
            <View className="items-center">
              <Lottie
                autoPlay
                loop
                style={{ width: 400, height: 400 }}
                source={require("../animations/Cart.json")}
              />
              <Text className="font-semibold text-xl text-center absolute mt-20">Aun no tienes productos en el carrito 😖</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}
