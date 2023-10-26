import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "../screens/Home/components/Cart";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NavigationCards from "./NavigationProducts";
import NavigationMyProducts from "./NavigationMyProducts";
const Tab = createBottomTabNavigator();
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import AddProduct from "../screens/Admin/AddProduct";
import SellerAddProduct from "../screens/Seller/SellerAddProduct";
import { AuthContext } from "../context/AuthContext";
import { ROLES } from "../config";
import Users from "../screens/Admin/Users";

export default function NavigationTap() {
  const { Cart: size } = useContext(CartContext);
  const { Auth } = useContext(AuthContext);

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

          if (route.name === "Productos" || route.name === "Mis Productos") {
            iconName = "food";
          } else if (route.name === "Carrito") {
            iconName = "cart";
          } else if (route.name === "Nuevo") {
            iconName = "plus";
          } else if (route.name === "Usuarios") {
            iconName = "account-group";
          }


          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "#3a6ea6",
      })}
    >
      {Auth.rol === ROLES.student && (
        <Tab.Screen
          name="Carrito"
          component={Cart}
          options={{ headerShown: false, tabBarBadge: totalItemsInCart }}
        />
      )}
      {Auth.rol === ROLES.student && (
        <Tab.Screen
        name="Productos"
        component={NavigationCards}
        options={{ headerShown: false }}
      />
      )}
      {Auth.rol === ROLES.admin && (
        <Tab.Screen
          name="Nuevo"
          component={AddProduct}
          options={{ headerShown: false }}
        />
      )}
      {Auth.rol === ROLES.seller && (
        <Tab.Screen
          name="Mis Productos"
          component={NavigationMyProducts}
          options={{ headerShown: false }}
        />
      )}
      {Auth.rol === ROLES.seller && (
        <Tab.Screen
          name="Nuevo"
          component={SellerAddProduct}
          options={{ headerShown: false }}
        />
      )}
      {Auth.rol === ROLES.admin && (
        <Tab.Screen
          name="Usuarios"
          component={Users}
          options={{ headerShown: false }}
        />
      )}
    </Tab.Navigator>
  );
}
