import { SafeAreaView, Text, View } from "react-native"
import { useRoute } from "@react-navigation/native"

export default function ProductInfo(){

    const route = useRoute();
    const { item } = route.params;

    return(
        <SafeAreaView className="flex-1 justify-center items-center">
            <View>
                <Text>{item.name}</Text>
            </View>
        </SafeAreaView>
    )
}