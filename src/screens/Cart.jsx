import {Text, SafeAreaView, Button} from 'react-native'
import { useEffect, useState } from 'react'

export default function Cart(){
    const [contador, setContador ] = useState(0)

    useEffect(()=>{
        if(contador > 0){
            alert('Cambie el estado del contador')
        }
    },[contador])

    return(
        <SafeAreaView>
            <Text>Cart</Text>
            <Text>Contador: {contador}</Text>
            <Button onPress={() => setContador(contador + 1) }title="Aumenta" />
        </SafeAreaView>
    )
}