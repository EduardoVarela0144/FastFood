import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect } from "react";

export default function ProductInfo() {
  const route = useRoute();
  const { item } = route.params;

  const { Cart, setCart } = useContext(CartContext);

  const addToCart = (item, quantityChangue) => {
    const existingItem = Cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantityChangue }
            : cartItem
        )
      );
    }else{
      setCart((prevCart) => [...prevCart, { ... item, quantity :  1}])
    }
  };

  return (
    <View className="flex-1">
      <View className="flex-1">
        <Image className="flex-1 object-contain" source={{ uri: item.urlImagen }} />
      </View>
      <View className="flex-1 bg-amber-300 p-4 justify-center">
        <Text className="text-white font-bold text-3xl my-4">FastFood</Text>
        <View className="bg-white h-auto rounded-xl shadow-xl p-4">
          <Text className="text-3xl text-amber-400 font-bold">{item.nombre}</Text>
          <View className="h-0.5 bg-amber-300 my-3" />
          <Text className="text-2xl font-bold">$ {item.precio} MXN</Text>
          <Text>{item.descripcion ? item.descripcion : 'Sin descripción'}</Text>
          <TouchableOpacity
            onPress={() => addToCart(item, 1)}
            className="bg-black rounded-xl w-48 py-4 px-2 mt-4 flex-row space-x-2"
          >
            <MaterialCommunityIcons name="cart" size={20} color={"white"} />

            <Text className="text-white">Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}