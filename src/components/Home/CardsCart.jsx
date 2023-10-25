import { View, Text, TouchableOpacity, Image } from "react-native";
export default function Cards_Products({ item, setCart }) {
  
  const changueQuantity = (item, amount) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((cartItem) =>
        cartItem.id === item.id
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
    <View className="bg-white h-48 justify-center rounded-2xl shadow-sm px-2 py-2">
      <View className="w-full flex flex-row justify-between  h-full ">
        <View className="flex-1 h-full ">
          <Image
            className="flex-1 object-contain rounded-xl"
            source={{ uri: item.image }}
          />
        </View>
        <View className="flex-1 flex-col  items-center justify-center">
          <View className="flex-1 items-center justify-end">
            <Text className="font-bold text-xl">{item.name}</Text>

            <Text className="font-bold text-2xl">$ {item.price} MXN</Text>
          </View>
          <View className="flex-1 pt-2  flex-row items-start justify-start ">
            <View className=" flex-1 items-center">
              <TouchableOpacity
                disabled={item.quantity === 0 ? true : false}
                onPress={() => changueQuantity(item, -1)}
                className="bg-red-500 w-8 h-8 items-center justify-center rounded-full"
              >
                <Text className="font-bold text-xl text-white">-</Text>
              </TouchableOpacity>
            </View>
            <View className="bg-slate-100 flex-1 items-center rounded-lg py-2">
              <Text className="font-bold">{item.quantity}</Text>
            </View>
            <View className=" flex-1 items-center">
              <TouchableOpacity
                onPress={() => changueQuantity(item, 1)}
                className="bg-green-500 w-8 h-8 items-center justify-center rounded-full"
              >
                <Text className="font-bold text-xl text-white">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
