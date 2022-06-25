// importing important components, hooks and other items from different files and libraries
import { View, ScrollView, StyleSheet, SafeAreaView, Text } from "react-native";
import { TableView, Section } from "react-native-tableview-simple";
import MenuCustomCell from "../components/MenuCustomCell";
import { menuItems as tableData } from "../data/menuItems";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CustomButton from "../components/CustomButton";

// styles for the components used within the functional components
const styles = StyleSheet.create({
   mainScrollView: {
      height: "100%",
   },
   container: {
      height: "100%",
   },
   checkout: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 20,
   },
});

/**
 * A function component that displays list of menu items and add functionality to it
 * @param {Object} props props passed to the component
 * @returns React Component
 */
export default function Menu({ navigation }) {
   // cart information used for display number of items in the cart
   const { cart } = useContext(CartContext);

   return (
      // display menu items within a safe area of the screen
      <SafeAreaView style={styles.container}>
         {/* allow users to scroll through the menu items */}
         <ScrollView style={styles.mainScrollView}>
            {/* display the menu items list as a table */}
            <TableView>
               {/* iterate over different types of food and drinks available */}
               {tableData.items.map((item, i) => (
                  // create a section for each type of food or drink
                  <Section key={i} header={item.title}>
                     {/* iterate over the food or drink items  */}
                     {item.contents.map(content => (
                        // display the food or drink item as a table cell
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
            {/* Dispaly cart information */}
            <View style={styles.checkout}>
               {/* diplay number of items in the cart */}
               <Text>Cart contains {cart.count} items</Text>
               {/* button to navigate to the cart screen */}
               <CustomButton
                  content="View Cart"
                  color="grey"
                  action={() => navigation.navigate("Cart")}
               />
            </View>
         </ScrollView>
      </SafeAreaView>
   );
}
