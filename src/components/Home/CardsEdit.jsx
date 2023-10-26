import { Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"

export default function CardsEdit({ name, price, description, image, item }) {
  const navigation = useNavigation();
  return (
    <View className="bg-white rounded-xl p-4 flex-row shadow items-center">
      <View className="flex-1">
        <Image
          className="rounded-xl aspect-square"
          source={{ uri: image }}
        />
      </View>
      <View className="flex-1 px-3">
        <Text className="font-bold text-xl">{name}</Text>
        <Text className="font-semibold text-md">$ {price} MXN</Text>
        <View className="w-full h-0.5 bg-slate-300 my-3" />
        <Text numberOfLines={1}>{description ? description : 'Sin descripción'}</Text>
        <View className="flex-row mt-12 items-center space-x-2">
          <TouchableOpacity onPress={() => {navigation.navigate("Product Info", {item : item })}} className="bg-amber-500 py-1 px-6 rounded-md">
            <Text className="text-white">Editar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
