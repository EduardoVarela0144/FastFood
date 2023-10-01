import { Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"

export default function Cards({ name, price, description, image }) {
  const navigation = useNavigation();
  return (
    <View className="bg-white rounded-xl p-4 flex-row h-48">
      <View className="flex-1 px-3">
        <Text className="font-bold text-xl">{name}</Text>
        <Text className="font-semibold text-md">$ {price} MXN</Text>
        <View className="w-full h-0.5 bg-slate-300 my-3" />
        <Text numberOfLines={1}>{description}</Text>
        <View className="flex-row mt-4 items-center space-x-2">
          <View className="rounded-full w-8 h-8 bg-amber-400 items-center justify-center">
            <MaterialCommunityIcons name="star" size={20} color={"white"} />
          </View>
          <TouchableOpacity onPress={() => {navigation.navigate("Product Info")}} className="bg-slate-200 py-1 px-6 rounded-md">
            <Text className="text-gray-400">Ver más</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-1">
        <Image
          className="flex-1 object-contain rounded-xl"
          source={{ uri: image }}
        />
      </View>
    </View>
  );
}
