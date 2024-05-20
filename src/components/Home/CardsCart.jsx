import { View, Text, TouchableOpacity, Image } from "react-native";
export default function Cards_Products({ item, setCart }) {

  const changueQuantity = (item, amount) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((cartItem) =>
        cartItem._id === item._id
          ? { ...cartItem, quantity: cartItem.quantity + amount }
          : cartItem
      );

      const filteredCart = updatedCart.filter(
        (cartItem) => cartItem.quantity > 0
      );

      return filteredCart;
    });
  };

  return (
    <View className="bg-white rounded-2xl shadow-sm py-4 px-3 w-full flex flex-row justify-between items-center space-x-3">
      <Image
        className="flex h-20 rounded-xl aspect-square"
        source={{ uri: item.image }}
      />
      <View className="flex-1 flex-row items-center justify-center space-x-1">
        <View className="flex w-2/3 flex-col justify-between pr-1">
          <Text className="font-bold text-ellipsis overflow-hidden">{item.name}</Text>
          <Text className="text-xs text-ellipsis overflow-hidden h-9 text-zinc-800">{item.description}</Text>
          <Text className="w-full font-bold mt-2 text-left">$ {item.price * item.quantity} MXN</Text>
        </View>

        <View className="w-1/3 flex-row items-center justify-between">
          <TouchableOpacity
            disabled={item.quantity === 0 ? true : false}
            onPress={() => changueQuantity(item, -1)}
            className="flex bg-red-500 rounded-full w-6 aspect-square items-center justify-center"
          >
            <Text className="text-white text-center text-sm">-</Text>
          </TouchableOpacity>

          <Text className="font-semibold text-lg px-1">{item.quantity}</Text>

          <TouchableOpacity
            onPress={() => changueQuantity(item, 1)}
            className={`flex bg-green-500 rounded-full w-6 aspect-square items-center justify-center`}
          >
            <Text className="text-white text-center text-sm">+</Text>
          </TouchableOpacity>
        </View>


      </View>
    </View>
  );
}
