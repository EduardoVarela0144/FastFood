import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTap from "./src/navigation/NavigationTap";
import { CartContext } from "./src/context/CartContext";
import { AuthContext } from "./src/context/AuthContext";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const [Cart, setCart] = useState([]);
  const [Auth, setAuth] = useState(null);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ Auth, setAuth }}>
        <CartContext.Provider value={{ Cart, setCart }}>
          <NavigationContainer>
            <StatusBar style="auto" />
            <NavigationTap />
          </NavigationContainer>
        </CartContext.Provider>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}
