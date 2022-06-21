// importing important components, hooks and other items from different files and libraries
import {
   View,
   Button,
   ScrollView,
   StyleSheet,
   SafeAreaView,
   Text,
} from "react-native";
import { TableView, Section } from "react-native-tableview-simple";
import MenuCustomCell from "../components/MenuCustomCell";
import { menuItems as tableData } from "../data/menuItems";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// styles for the components used within the functional components
const styles = StyleSheet.create({
   mainScrollView: {
      height: "100%",
   },
   container: {
      height: "100%",
   },
});

/**
 * A function component that displays list of menu items and add functionality to it
 * @returns JSX to a react function component
 */
export default function Menu({ navigation }) {
   const { cart } = useContext(CartContext);
   
   return (
      <SafeAreaView style={styles.container}>
         <ScrollView style={styles.mainScrollView}>
            <TableView>
               {tableData.items.map((item, i) => (
                  <Section key={i} header={item.title}>
                     {item.contents.map(content => (
                        <MenuCustomCell
                           key={content.id}
                           id={content.id}
                           title={content.title}
                           img={content.imguri}
                        />
                     ))}
                  </Section>
               ))}
            </TableView>
            <View>
               <Text>Cart contains {cart.count} items</Text>
               <Button
                  title="View Cart"
                  onPress={() => navigation.navigate("Cart")}
               />
            </View>
         </ScrollView>
      </SafeAreaView>
   );
}
