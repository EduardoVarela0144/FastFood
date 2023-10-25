import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login/Login";
import Register from "../screens/Login/Register";
import Stepper from "../screens/Register/Stepper";
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
        <Stack.Screen
        name="Stepper"
        component={Stepper}
        options={{ title: "", headerTransparent: true, headerShown: false }}
      />
    
    </Stack.Navigator>
  );
}
