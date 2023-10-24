import { View, Text, TouchableOpacity } from "react-native";
export default function Cards_Products({ item, setCart }) {

  const changueQuantity = (item, amount) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + amount }
          : cartItem
      )
    );
  };


  return (
    <View className="bg-amber-400 h-28 justify-center rounded-2xl px-4 shadow-sm">
      <View className=" w-full flex flex-row justify-between">
        <View className="flex-1 ">
          <Text className="font-bold text-white text-xl">{item.nombre}</Text>
          <Text className="font-bold text-2xl">$ {item.precio} MXN</Text>
        </View>
        <View className="flex-1 flex-row items-center justify-cente">
          <View className=" flex-1 items-center">
            <TouchableOpacity disabled={item.quantity === 0 ?  true : false} onPress={() => changueQuantity(item, -1)} className="bg-red-500 w-8 h-8 items-center justify-center rounded-full">
              <Text className="font-bold text-xl text-white">-</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-slate-100 flex-1 items-center rounded-lg py-2">
            <Text className="font-bold">{item.quantity}</Text>
          </View>
          <View className=" flex-1 items-center">
            <TouchableOpacity onPress={() => changueQuantity(item, 1)} className="bg-green-500 w-8 h-8 items-center justify-center rounded-full">
              <Text className="font-bold text-xl text-white">+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
