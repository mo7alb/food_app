// import hooks and components
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { View, Text, Image, StyleSheet } from "react-native";
import { menuItems } from "../data/menuItems";
import { Cell } from "react-native-tableview-simple";
import CustomButton from "./CustomButton";

// styles used within the component
const styles = StyleSheet.create({
   cell: {
      width: "100%",
   },
   cellTitle: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20,
      marginTop: 20,
      marginBottom: 5,
   },
   cellImg: {
      width: "100%",
      height: 290,
   },
   cellCount: {
      textAlign: "center",
      fontSize: 17,
      marginVertical: 8,
   },
   btnContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
});

/**
 * A function to get details of a menu item
 * @param {Number} id interger that represents the menu item id
 * @returns Menu item object
 */
const details = id => {
   for (let j = 0; j < menuItems.items.length; j++) {
      const item = menuItems.items[j];
      for (let i = 0; i < item.contents.length; i++) {
         if (item.contents[i].id === id) {
            const element = item.contents[i];

            return element;
         }
      }
   }
};

/**
 * A functional component that displays a single cart item as a table cell
 * @param {Object} param0 props passed to the component
 * @returns React component
 */
export default function CartItem({ item }) {
   // get the add and remove from cart functionalities from the context
   const { add, remove } = useContext(CartContext);
   // get the details of the cart item
   const x = details(item.id);

   return (
      // return the cart related information as a custom table cell
      <Cell
         cellContentView={
            <View style={styles.cell}>
               {/* name of the item */}
               <Text style={styles.cellTitle}>{x.title}</Text>
               {/* item image  */}
               <Image style={styles.cellImg} source={x.imguri} />
               {/* item count - number of items in the cart  */}
               <Text style={styles.cellCount}>Qty: {item.count}</Text>
               <View style={styles.btnContainer}>
                  {/* button to add one more such item */}
                  <CustomButton
                     content="+"
                     color="success"
                     action={() => add(item.id)}
                  />
                  {/* button to remove one more such item */}
                  <CustomButton
                     content="-"
                     color="danger"
                     action={() => remove(item.id, false)}
                  />
                  {/* button to remove all more such items */}
                  <CustomButton
                     content="remove"
                     color="danger"
                     action={() => remove(item.id, true)}
                  />
               </View>
            </View>
         }
      />
   );
}
