import {Text, View, Image} from "react-native"

export default function Cards({name, price, description, image}){
    return(
    <View>
        <Text>{name}</Text>
        <Text>{price}</Text>
        <Text>{description}</Text>
    </View>
    )
}