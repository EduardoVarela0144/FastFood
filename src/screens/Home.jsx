import {Text, SafeAreaView} from 'react-native'
import Lottie from "lottie-react-native"

export default function Home(){
    return(
        <SafeAreaView style={{backgroundColor:"white"}}>
            <Lottie
                autoPlay
                lopp
                source={require("../animations/animation.json")}
                style={{width:"100%", height:"100%"}}
            />
        </SafeAreaView>
    )
}