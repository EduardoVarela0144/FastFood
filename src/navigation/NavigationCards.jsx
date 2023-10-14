import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ProductInfo from "../screens/ProductInfo";
const Stack = createNativeStackNavigator();

export default function NavigationCards() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "", headerTransparent: true, headerShown: false }}
      />
      <Stack.Screen
        name="Product Info"
        component={ProductInfo}
        options={{ title: "", headerTransparent: true, headerShown:false }}
      />
    </Stack.Navigator>
  );
}
