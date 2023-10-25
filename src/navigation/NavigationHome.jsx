import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "../screens/Home/Cart";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NavigationCards from "./NavigationProducts";
const Tab = createBottomTabNavigator();
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import AddProduct from "../screens/Admin/AddProduct";
import { AuthContext } from "../context/AuthContext";
import { ROLES } from "../config";
export default function NavigationTap() {
  const { Cart: size, setCart } = useContext(CartContext);
  const { Auth, setAuth } = useContext(AuthContext);

  const totalItemsInCart = size.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Tab.Navigator
      initialRouteName="Productos"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Productos") {
            iconName = "food";
          } else if (route.name === "Carrito") {
            iconName = "cart";
          } else if (route.name === "Nuevo") {
            iconName = "plus";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "#FBBF24",
      })}
    >
      <Tab.Screen
        name="Carrito"
        component={Cart}
        options={{ headerShown: false, tabBarBadge: totalItemsInCart }}
      />
      <Tab.Screen
        name="Productos"
        component={NavigationCards}
        options={{ headerShown: false }}
      />
      {Auth.rol === ROLES.admin && (
        <Tab.Screen
          name="Nuevo"
          component={AddProduct}
          options={{ headerShown: false }}
        />
      )}
    </Tab.Navigator>
  );
}
