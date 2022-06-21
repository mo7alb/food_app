import { Cell } from "react-native-tableview-simple";
import { View, Image, Text, StyleSheet } from "react-native";

// component related styling
const styles = StyleSheet.create({
   mainContainer: {
      width: "100%",
   },
   headerImg: {
      width: "100%",
      borderRadius: 10,
   },
   eta: {
      backgroundColor: "white",
      alignSelf: "flex-start",
      paddingHorizontal: 25,
      paddingVertical: 10,
      borderRadius: 50,
      position: "absolute",
      zIndex: 1,
      right: 10,
      top: 185,
   },
   etaText: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 17,
   },
   title: {
      fontWeight: "bold",
      fontSize: 18,
      marginTop: 10,
      marginBottom: 6,
   },
   subtitle: {
      color: "#838383",
   },
});

/**
 * A functional component that customizes a single cell of
 * a table view
 * @param {Object} props props passed to the component
 * @returns JSX of a functional component
 */
export default function RestaurantCustomCell(props) {
   return (
      <Cell
         highlightUnderlayColor={props.highlightColor}
         backgroundColor={props.backgroundColor}
         onPress={props.action}
         cellContentView={
            <View style={[{ height: props.height }, styles.mainContainer]}>
               <Image
                  source={props.imgUri}
                  resizeMode="cover"
                  style={[styles.headerImg, { height: props.height * 0.75 }]}
               />
               <View style={styles.eta}>
                  <Text style={styles.etaText}>{props.eta}</Text>
                  <Text style={styles.etaText}>mins</Text>
               </View>
               <Text style={styles.title}>{props.title}</Text>
               <Text style={styles.subtitle}>{props.tagline}</Text>
            </View>
         }
      />
   );
}
