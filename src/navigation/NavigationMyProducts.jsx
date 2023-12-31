import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeSeller from "../screens/Seller/HomeSeller";
import ProductInfo from "../screens/Home/components/ProductInfo";
const Stack = createNativeStackNavigator();

export default function NavigationCards() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeSeller}
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
