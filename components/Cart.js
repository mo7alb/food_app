import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
   cartStyles: {
      height: 300,
      display: "flex",
      alignItems: "center",
      paddingTop: 10,
   },
   cartText: {
      fontWeight: "bold",
      fontSize: 16,
   },
   btn: {
      width: "45%",
      backgroundColor: "#bbb",
      height: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      marginLeft: 15,
   },
   checkoutBtn: {
      width: "90%",
      backgroundColor: "#45e4e4",
      marginLeft: 0,
      marginVertical: 10,
   },
});

export default function Cart({ state }) {
   return (
      <View style={styles.cartStyles}>
         <Text style={styles.cartText}>Cart: {state.count} items</Text>
         <TouchableOpacity
            onPress={() => alert(`You just purchased ${state.count} items`)}
            style={[styles.btn, styles.checkoutBtn]}
         >
            <Text style={styles.btnText}>Checkout</Text>
         </TouchableOpacity>
      </View>
   );
}
