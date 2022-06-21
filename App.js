import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurants from "./components/Restaurants";
import Menu from "./components/Menu";

const Stack = createNativeStackNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Restaurants" component={Restaurants} />
            <Stack.Screen name="Menu" component={Menu} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
