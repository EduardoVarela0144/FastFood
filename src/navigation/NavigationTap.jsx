import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Notifications from "../screens/Notifications";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NavigationCards from "./NavigationCards";
const Tab = createBottomTabNavigator();

export default function NavigationTap() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "food";
          } else if (route.name === "Cart") {
            iconName = "cart";
          } else if (route.name === "Notifications") {
            iconName = "message";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FBBF24",
      }}
    >
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Home"
        component={NavigationCards}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
