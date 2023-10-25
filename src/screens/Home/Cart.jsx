import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { useContext } from "react";
import CardsCart from "../../components/Home/CardsCart";
import { CartContext } from "../../context/CartContext";
import Lottie from "lottie-react-native";
import PageLayout from "../../components/General/PageLayout";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { usePostStripePayment } from "../../hooks/Stripe/usePostStripePayment";
import { AuthContext } from "../../context/AuthContext";
export default function Cart() {
  const { Cart, setCart } = useContext(CartContext);
  const { Auth } = useContext(AuthContext);

  let total = 0;

  Cart.forEach((cartItem) => {
    const itemTotal = cartItem.quantity * cartItem.price;
    total += itemTotal;
  });

  const { postStripePayment } = usePostStripePayment();

  const pay = {
    name: Auth.firstName,
    amount: total,
  };

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
        <TouchableOpacity
          disabled={total === 0 ? true : false}
          onPress={() => postStripePayment(pay)}
          className="bg-black rounded-xl w-full py-4 px-4 mt-4 flex-row space-x-2 justify-center"
        >
          <MaterialCommunityIcons
            name="credit-card-outline"
            size={20}
            color={"white"}
          />

          <Text className="text-white">Pagar ahora</Text>
        </TouchableOpacity>
      </View>
    </PageLayout>
  );
}
