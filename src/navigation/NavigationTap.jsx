import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "../screens/Cart";
import Notifications from "../screens/Notifications";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NavigationCards from "./NavigationCards";
const Tab = createBottomTabNavigator();
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import AddProduct from "../screens/AddProduct";

export default function NavigationTap() {
  const { Cart: size, setCart } = useContext(CartContext);
  const totalItemsInCart = size.reduce(
    (total, item) => total + item.quantity,
    0
  );

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
          } else if (route.name === "New") {
            iconName = "plus";
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
        options={{ headerShown: false, tabBarBadge: totalItemsInCart }}
      />
      <Tab.Screen
        name="Home"
        component={NavigationCards}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      /> */}
      <Tab.Screen
        name="New"
        component={AddProduct}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
