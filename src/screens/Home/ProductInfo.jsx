import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ROLES } from "../../config";

export default function ProductInfo() {
  const route = useRoute();
  const { item } = route.params;
  const { Auth } = useContext(AuthContext);
  const { Cart, setCart } = useContext(CartContext);

  const addToCart = (item, quantityChangue) => {
    const existingItem = Cart.find((cartItem) => cartItem._id === item._id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem._id === item._id
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
        <Image className="flex-1 object-contain" source={{ uri: item.image }} />
      </View>
      <View className="flex-1 bg-[#3a6ea6] p-4 justify-center">
        <Text className="text-white font-bold text-3xl my-4">FastFood</Text>
        <View className="bg-white h-auto rounded-xl shadow-xl p-4">
          <Text className="text-3xl text-[#3a6ea6] font-bold">{item.name}</Text>
          <View className="h-0.5 bg-[#3a6ea6] my-3" />
          <Text className="text-2xl font-bold">$ {item.price} MXN</Text>
          <Text>{item.description ? item.description : 'Sin descripción'}</Text>
          {Auth.rol === ROLES.student && (
          <TouchableOpacity
            onPress={() => addToCart(item, 1)}
            className="bg-black rounded-xl w-48 py-4 px-2 mt-4 flex-row space-x-2"
          >
            <MaterialCommunityIcons name="cart" size={20} color={"white"} />

            <Text className="text-white">Agregar al carrito</Text>
          </TouchableOpacity>)}
        </View>
      </View>
    </View>
  );
}
