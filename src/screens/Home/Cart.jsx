import { Text, SafeAreaView, View, FlatList } from "react-native";
import { useContext } from "react";
import CardsCart from "../../components/Home/CardsCart";
import { CartContext } from "../../context/CartContext";
import Lottie from "lottie-react-native";
export default function Cart() {
  const { Cart, setCart } = useContext(CartContext);

  let total = 0;

  Cart.forEach((cartItem) => {
    const itemTotal = cartItem.quantity * cartItem.precio;
    total += itemTotal;
  });


  return (
    <SafeAreaView className="flex-1 flex">
      <View className="px-4 flex-1">
        <Text className="font-bold text-2xl mb-6 text-center">
          Carrito de compras
        </Text>
        <Text className="font-bold text-xl px-4 my-4">Total : $ {total} MXN</Text>
        <FlatList
          data={Cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardsCart item={item} setCart={setCart} />
          )}
          ItemSeparatorComponent={<View className="h-6" />}
          ListEmptyComponent={
            <View className="items-center">
              <Lottie
                autoPlay
                loop
                style={{ width: 400, height: 400 }}
                source={require("../../animations/Cart.json")}
              />
              <Text className="font-semibold text-xl text-center absolute mt-20">
                Aun no tienes productos en el carrito 😖
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}