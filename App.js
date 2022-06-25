// import libraries and components
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurants from "./screens/Restaurants";
import Menu from "./screens/Menu";
import Cart from "./screens/Cart";
import CartProvider from "./context/CartContext";

// create a navigator
const Stack = createNativeStackNavigator();

/**
 * Entry point component that handles navigation
 * @returns React Component
 */
export default function App() {
   return (
      <CartProvider>
         <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name="Restaurants" component={Restaurants} />
               <Stack.Screen name="Menu" component={Menu} />
               <Stack.Screen name="Cart" component={Cart} />
            </Stack.Navigator>
         </NavigationContainer>
      </CartProvider>
   );
}
