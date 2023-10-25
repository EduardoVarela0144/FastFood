import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTap from "./src/navigation/NavigationHome";
import { CartContext } from "./src/context/CartContext";
import { AuthContext } from "./src/context/AuthContext";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import NavigationLogin from "./src/navigation/NavigationLogin";
import { StripeProvider } from "@stripe/stripe-react-native";

export default function App() {
  const [Cart, setCart] = useState([]);
  const [Auth, setAuth] = useState(null);
  const queryClient = new QueryClient();

  let mainComponent = null;

  if (Auth) {
    mainComponent = <NavigationTap />;
  } else {
    mainComponent = <NavigationLogin />;
  }
  return (
    <QueryClientProvider client={queryClient}>
                  <StripeProvider publishableKey="pk_test_51NLZG3DewdilSf5wWNhDtDB5KX0l3c1ErwUoGkPqAairUVzAKuxmU0FlzzPsgzsmzV48azMlytkptRJn3tUS9M0v00d3fxU4zt">

      <AuthContext.Provider value={{ Auth, setAuth }}>
        <CartContext.Provider value={{ Cart, setCart }}>
          <NavigationContainer>
            <StatusBar style="auto" />
            {mainComponent}
          </NavigationContainer>
        </CartContext.Provider>
      </AuthContext.Provider>
      </StripeProvider>

    </QueryClientProvider>
  );
}
