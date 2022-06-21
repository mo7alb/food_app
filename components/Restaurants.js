import {
   Image,
   ScrollView,
   Text,
   View,
   Dimensions,
   StyleSheet,
} from "react-native";
import { Cell, Section, TableView } from "react-native-tableview-simple";

const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
   headerImg: {
      width: screenWidth * 0.93,
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
      marginVertical: 10,
   },
   subtitle: {
      color: "#838383",
   },
});

const HomescreenCell = props => (
   <Cell
      highlightUnderlayColor={props.highlightColor}
      backgroundColor={props.backgroundColor}
      onPress={props.action}
      cellContentView={
         <View
            style={{
               height: props.height,
            }}
         >
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

export default function Restaurants({ navigation }) {
   return (
      <ScrollView style={{ height: "100%" }}>
         <TableView>
            <Section header="" hideSeparator={true} separatorTintColor="#ccc">
               <HomescreenCell
                  title="Joe's Gelato"
                  tagline="Desert, Ice cream, £££"
                  eta="10-30"
                  imgUri={require("../assets/restaurant-1.jpeg")}
                  height={290}
                  highLightColor="#ccc"
                  backgroundColor="#f0f0f0"
                  action={() => navigation.navigate("Menu")}
               />
               <HomescreenCell
                  title="Joe's Gelato"
                  tagline="Desert, Ice cream, £££"
                  eta="10-30"
                  imgUri={require("../assets/restaurant-1.jpeg")}
                  height={290}
                  highLightColor="#ccc"
                  backgroundColor="#f0f0f0"
                  action={() => navigation.navigate("Menu")}
               />
               <HomescreenCell
                  title="Joe's Gelato"
                  tagline="Desert, Ice cream, £££"
                  eta="10-30"
                  imgUri={require("../assets/restaurant-1.jpeg")}
                  height={290}
                  highLightColor="#ccc"
                  backgroundColor="#f0f0f0"
                  action={() => navigation.navigate("Menu")}
               />
            </Section>
         </TableView>
      </ScrollView>
   );
}
