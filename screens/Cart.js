// import important libraries and components
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import { TableView, Section, Cell } from "react-native-tableview-simple";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import CustomButton from "../components/CustomButton";

// styles used within the component
const styles = StyleSheet.create({
   container: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   scrollViewStyles: {
      height: "100%",
   },
   tableViewStyles: {
      width: "100%",
   },
   btnContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 15,
   },
});

/**
 * Screen to display list of items that were added to the cart
 * @returns React component
 */
export default function Cart() {
   // get the cart state stored in the context state
   const { cart } = useContext(CartContext);

   return (
      // display cart content in a safe area within the screen
      <SafeAreaView style={styles.container}>
         {/* allow user to be able to scroll through the list of cart items */}
         <ScrollView style={styles.scrollViewStyles}>
            {/* display the content of the cart as a table */}
            <TableView style={styles.tableViewStyles}>
               <Section>
                  {/* iterate over all items and display them as a table cell */}
                  {cart.items.map(item => (
                     <CartItem key={item.id} item={item} />
                  ))}
               </Section>
            </TableView>
            <View style={styles.btnContainer}>
               {/* display a button to checkout and order the food within the cart */}
               <CustomButton
                  content="checkout"
                  color="grey"
                  action={() =>
                     alert(`Purchase Complete with ${cart.count} items`)
                  }
               />
            </View>
         </ScrollView>
      </SafeAreaView>
   );
}
