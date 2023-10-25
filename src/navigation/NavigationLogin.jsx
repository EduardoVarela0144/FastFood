import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
const Stack = createNativeStackNavigator();

export default function NavigationLogin() {
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "", headerTransparent: true, headerShown: false }}
      />
       <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: "", headerTransparent: true, headerShown: false }}
      />
    
    </Stack.Navigator>
  );
}
