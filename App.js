import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTap from "./src/navigation/NavigationTap";
import { CartContext } from "./src/context/CartContext";
import { useState } from "react";

export default function App() {
  const [Cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ Cart, setCart }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <NavigationTap />
      </NavigationContainer>
    </CartContext.Provider>
  );
}
