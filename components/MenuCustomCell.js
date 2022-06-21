import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Cell } from "react-native-tableview-simple";

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
      backgroundColor: "#bbb",
      height: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      marginLeft: 15,
   },
   btnContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      marginVertical: 12,
      marginLeft: -5,
   },
   btnText: {
      fontWeight: "bold",
      fontSize: 18,
   },
});

export default function MenuCustomCell({ title, img, add, remove }) {
   return (
      <Cell
         cellContentView={
            <View style={styles.containerView}>
               <Image source={img} style={styles.cellImg} />
               <Text style={styles.title}>{title}</Text>
               <View style={styles.btnContainer}>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => add(title)}
                  >
                     <Text style={styles.btnText}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     style={styles.btn}
                     onPress={() => remove(title)}
                  >
                     <Text style={styles.btnText}>-</Text>
                  </TouchableOpacity>
               </View>
            </View>
         }
      />
   );
}
