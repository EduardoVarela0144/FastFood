import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home"
import Cart from "../screens/Cart"
import Notifications from "../screens/Notifications"

const Tab = createBottomTabNavigator();

export default function NavigationTap(){
    <Tab.Navigator>
        <Tab.Screen name="Cart" component={Cart}/>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Notifications" component={Notifications}/>
    </Tab.Navigator>

}