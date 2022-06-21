// import important hooks and components
import {
   Image,
   ScrollView,
   Text,
   View,
   Dimensions,
   StyleSheet,
} from "react-native";
import { Cell, Section, TableView } from "react-native-tableview-simple";

// determine the width of the screen - to be used in styling components
const screenWidth = Dimensions.get("screen").width;

// component related styling
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
const HomescreenCell = props => (
   <Cell
      highlightUnderlayColor={props.highlightColor}
      backgroundColor={props.backgroundColor}
      onPress={props.action}
      cellContentView={
         <View
            style={{
               height: props.height,
               marginBottom: 10,
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

// data to be used to diplay restaurants
const data = {
   items: [
      {
         title: "",
         height: 290,
         highLightColor: "#ccc",
         backgroundColor: "#f0f0f0",
         contents: [
            {
               title: "Joe's Gelato",
               tagline: "Desert, Ice cream, £££",
               eta: "10-30",
               imgUri: require("../assets/restaurant-1.jpeg"),
            },
            {
               title: "John's Gelato",
               tagline: "Coffee, Ice cream, £££",
               eta: "15",
               imgUri: require("../assets/restaurant-2.jpeg"),
            },
            {
               title: "Mosbuck",
               tagline: "Coffee, Croissants",
               eta: "35+",
               imgUri: require("../assets/restaurant-1.jpeg"),
            },
         ],
      },
      {
         title: "",
         height: 290,
         highLightColor: "#ccc",
         backgroundColor: "#f0f0f0",
         action: () => navigation.navigate("Menu"),
         contents: [
            {
               title: "Modees",
               tagline: "Burger, Pizze",
               eta: "50+",
               imgUri: require("../assets/restaurant-2.jpeg"),
            },
            {
               title: "Lord of the Fries",
               tagline: "Arabic, American",
               eta: "15",
               imgUri: require("../assets/restaurant-1.jpeg"),
            },
            {
               title: "The little Eatery",
               tagline: "American",
               eta: "20-30",
               imgUri: require("../assets/restaurant-2.jpeg"),
            },
         ],
      },
   ],
};

/**
 * A functional component that describes the restaurants screen
 * @param {Object} param0 props passed to the component
 * @returns JSX of a react functional component
 */
export default function Restaurants({ navigation }) {
   const action = () => navigation.navigate("Menu");
   return (
      <ScrollView style={{ height: "100%" }}>
         <TableView>
            {data.items.map((item, index) => (
               <Section
                  key={index}
                  header={item.title}
                  hideSeparator={true}
                  separatorTintColor="#ccc"
               >
                  {item.contents.map((content, i) => (
                     <HomescreenCell
                        key={i}
                        title={content.title}
                        tagline={content.tagline}
                        eta={content.eta}
                        imgUri={content.imgUri}
                        height={item.height}
                        highLightColor={item.highLightColor}
                        backgroundColor={item.backgroundColor}
                        action={action}
                     />
                  ))}
               </Section>
            ))}
         </TableView>
      </ScrollView>
   );
}
