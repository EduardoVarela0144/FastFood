import { Text, SafeAreaView, View, FlatList } from "react-native";
import { useContext } from "react";
import CardsCart from "../../components/Home/CardsCart";
import { CartContext } from "../../context/CartContext";
import Lottie from "lottie-react-native";
import PageLayout from "../../components/General/PageLayout";

export default function Cart() {
  const { Cart, setCart } = useContext(CartContext);

  let total = 0;

  Cart.forEach((cartItem) => {
    const itemTotal = cartItem.quantity * cartItem.price;
    total += itemTotal;
  });

  return (
    <PageLayout>
      <View className="px-4 flex-1 py-4">
        <FlatList
          data={Cart}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => <CardsCart item={item} setCart={setCart} />}
          ItemSeparatorComponent={<View className="h-6" />}
          ListEmptyComponent={
            <View className="items-center  flex-1 h-72 space-y-2">
              <View className="w-full flex-1">
                <Lottie
                  autoPlay
                  loop
                  resizeMode="cover"
                  style={{ flex: 1 }}
                  source={require("../../animations/Cart.json")}
                />
              </View>
              
              <Text className=" text-md text-center">
                Aun no tienes productos en el carrito 😖
              </Text>
            </View>
          }
        />
        <View className="bg-amber-400 rounded-xl">
          <Text className="font-bold text-xl px-4 my-4 text-white">
            Total : $ {total} MXN
          </Text>
        </View>
      </View>
    </PageLayout>
  );
}
