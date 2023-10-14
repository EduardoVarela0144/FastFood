
import { View, Text } from "react-native"
export default function Cards_Products({item}){

    return (
    <View className="bg-green-200">
        <Text>{item.name}</Text>
        <Text>{item.quantity}</Text>
    </View>
    )

}