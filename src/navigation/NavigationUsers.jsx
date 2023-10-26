import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Users from "../screens/Admin/Users";
import User from "../screens/Admin/User";
import EditUser from "../screens/Admin/EditUser";
import AddUser from "../screens/Admin/AddUser";

const Stack = createNativeStackNavigator();

export default function NavigationUsers() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Users"
        component={Users}
        options={{ title: "", headerTransparent: true, headerShown: false }}
      />
      <Stack.Screen
        name="AddUser"
        component={AddUser}
        options={{ title: "", headerTransparent: true, headerShown: false }}
      />
      <Stack.Screen
        name="EditUser"
        component={EditUser}
        options={{ title: "", headerTransparent: true, headerShown: false }}
      />
      <Stack.Screen
        name="User"
        component={User}
        options={{ title: "", headerTransparent: true, headerShown: false }}
      />
    </Stack.Navigator>
  );
}
