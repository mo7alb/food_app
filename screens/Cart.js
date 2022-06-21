import {
   SafeAreaView,
   StyleSheet,
   Text,
   Button,
   Image,
   View,
   ScrollView,
   TouchableOpacity,
} from "react-native";
import { TableView, Section, Cell } from "react-native-tableview-simple";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { menuItems } from "../data/menuItems";

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
   btn: {
      width: "90%",
      backgroundColor: "blue",
      height: 35,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 8,
   },
   btnDanger: {
      backgroundColor: "#dc3545",
      color: "#fff",
   },
   btnSuccess: {
      backgroundColor: "#17a2b8",
      color: "#fff",
   },
   btnContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   btnText: {
      color: "#fff",
   },
});

export default function Cart() {
   const { cart } = useContext(CartContext);

   return (
      <SafeAreaView style={styles.container}>
         <ScrollView style={styles.scrollViewStyles}>
            <TableView style={styles.tableViewStyles}>
               <Section>
                  {cart.items.map(item => (
                     <CartItem key={item.id} item={item} />
                  ))}
               </Section>
            </TableView>
            <View style={styles.btnContainer}>
               <TouchableOpacity
                  style={[styles.btn, styles.btnDanger]}
                  onPress={() => alert("Purchase Complete")}
               >
                  <Text style={styles.btnText}>Checkout</Text>
               </TouchableOpacity>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
}

function CartItem({ item }) {
   const { add, remove } = useContext(CartContext);
   const x = details(item.id);
   return (
      <Cell
         cellContentView={
            <View style={styles.cell}>
               <Text style={styles.cellTitle}>{x.title}</Text>
               <Image style={styles.cellImg} source={x.imguri} />
               <Text style={styles.cellCount}>Qty: {item.count}</Text>
               <View style={styles.btnContainer}>
                  <TouchableOpacity
                     style={[styles.btn, styles.btnSuccess]}
                     onPress={() => add(item.id)}
                  >
                     <Text style={styles.btnText}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     style={[styles.btn, styles.btnDanger]}
                     onPress={() => remove(item.id, false)}
                  >
                     <Text style={styles.btnText}>-</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                     style={[styles.btn, styles.btnDanger]}
                     onPress={() => remove(item.id, true)}
                  >
                     <Text style={styles.btnText}>Remove</Text>
                  </TouchableOpacity>
               </View>
            </View>
         }
      />
   );
}

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
