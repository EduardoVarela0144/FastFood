import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ROLES } from "../../../config";
import NavBarTittle from "../../../components/General/NavBarTittle";
import { ActivityIndicator } from "react-native-paper";
import { useState } from "react";

export default function ProductInfo() {
  const route = useRoute();
  const { item } = route.params;
  const { Auth } = useContext(AuthContext);
  const { Cart, setCart } = useContext(CartContext);

  const addToCart = (item, quantityChangue) => {
    console.log(item, quantityChangue)
    const existingItem = Cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantityChangue }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }])
    }
  };

  const totalItemsInCart = Cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const [imageURI, setImageURI] = useState("https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif");

  const onLoadImage = () => {
    setImageURI(item.image);
  }

  return (
    <View className="flex-1 bg-[#3a6ea6] pt-12">
      <NavBarTittle title="FastFood" />
      <View className="flex-1  rounded-b-3xl overflow-hidden object-contain">
        <Image
          className="flex-1"
          source={{ uri: imageURI }}
          onLoad={onLoadImage}
        />
      </View>


      <View className="flex-1 p-4">
        <View className="flex-1 bg-white h-auto rounded-xl shadow-xl p-4 mb-auto">
          <Text className="text-3xl text-[#3a6ea6] font-bold">{item.name}</Text>
          <View className="h-0.5 bg-[#3a6ea6] my-3" />
          <Text>{item.description ? item.description : 'Sin descripción'}</Text>

          <View className="flex mt-auto justify-center">
            <Text className="text-2xl font-bold text-right">$ {item.price} MXN</Text>
            {Auth.rol === ROLES.student && (
              <TouchableOpacity
                onPress={() => addToCart(item, 1)}
                className="bg-black w-full rounded-xl py-3 px-2 mt-3"
              >
                <View className="flex-row justify-center items-center space-x-3">
                  <MaterialCommunityIcons name="cart" size={20} color={"white"} />
                  <Text className="text-white text-center text-lg">Agregar al carrito</Text>
                  {
                    totalItemsInCart > 0 &&
                    <View className="flex bg-red-500 rounded-full w-6 aspect-square items-center justify-center">
                      <Text className="text-white text-center text-xs">{totalItemsInCart}</Text>
                    </View>
                  }
                </View>
              </TouchableOpacity>)}
          </View>

        </View>
      </View>
    </View>
  );
}
