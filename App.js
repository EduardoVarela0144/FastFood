import { StatusBar } from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native"
import NavigationTap from "./src/navigation/NavigationTap";

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="auto"/>
      <NavigationTap/>
    </NavigationContainer>
   
  );
}

