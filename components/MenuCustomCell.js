// import hooks, libraries and components
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Cell } from "react-native-tableview-simple";
import CustomButton from "./CustomButton";

// styles used within the component
const styles = StyleSheet.create({
   containerView: {
      width: "100%",
   },
   cellImg: {
      width: "100%",
      height: 290,
   },
   title: {
      fontWeight: "bold",
      fontSize: 20,
      marginTop: 15,
      textAlign: "center",
   },
   btn: {
      width: "45%",
      marginLeft: 15,
   },
   btnContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      marginVertical: 12,
      marginLeft: -5,
   },
});

/**
 * A functional component that creates a custom table cell for the menu item
 * @param {Object} props props passed to the component
 * @returns React component
 */
export default function MenuCustomCell({ id, title, img }) {
   // import the add and remove functionality from the cart state
   const { add, remove } = useContext(CartContext);

   // return a cell with custom structure and style
   return (
      <Cell
         cellContentView={
            <View style={styles.containerView}>
               {/* image of the menu item */}
               <Image source={img} style={styles.cellImg} />
               {/* name of the menu item */}
               <Text style={styles.title}>{title}</Text>
               <View style={styles.btnContainer}>
                  {/* add one such item to the cart */}
                  <CustomButton
                     content="+"
                     color="grey"
                     action={() => add(id)}
                     customStyles={styles.btn}
                  />
                  {/* remove one such item from the cart */}
                  <CustomButton
                     content="-"
                     color="grey"
                     action={() => remove(id)}
                     customStyles={styles.btn}
                  />
               </View>
            </View>
         }
      />
   );
}
