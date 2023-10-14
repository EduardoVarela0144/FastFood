import { Text, SafeAreaView, Button, View, FlatList } from "react-native";
import { useContext, useEffect, useState } from "react";
import Cards_Products from "../components/Cards_Products";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { Cart, setCart } = useContext(CartContext);
  return (
    <SafeAreaView className="flex-1 flex">
      <View className="px-4 flex-1">
        <Text className="font-bold text-2xl">Carrito de compras</Text>
        <FlatList
          data={Cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Cards_Products />}
          ListEmptyComponent={
            <View className="bg-red-500  justify-center items-center">
              <Text>Aun no tienes productos en el carrito</Text>
            </View>
          }
        />
        <Cards_Products />
      </View>
    </SafeAreaView>
  );
}
