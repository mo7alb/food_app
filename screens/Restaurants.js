// import important hooks and components
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { Section, TableView } from "react-native-tableview-simple";
import RestaurantCustomCell from "../components/RestaurantCustomCell";
import { restaurantsData as data } from "../data/restaurantsData";

// styles used within the component
const styles = StyleSheet.create({
   scrollView: { height: "100%" },
   container: { height: "100%" },
});

/**
 * A functional component that describes the restaurants screen
 * @param {Object} param0 props passed to the component
 * @param {Object} props props passed to the component
 * @returns React component
 */
export default function Restaurants({ navigation }) {
   // function to navigate to Menu screen after a restaurant is tapped
   const action = () => navigation.navigate("Menu");

   return (
      // display the list of restaurants within a safe area of the screen
      // so that no restaurant is underneath a notch for example
      <SafeAreaView style={styles.container}>
         {/* allow users to scroll through a list of restaurants */}
         <ScrollView style={styles.scrollView}>
            {/* display the restaurents as a table cell */}
            <TableView>
               {/* iterate over a list of different types of restaurants */}
               {data.items.map((item, index) => (
                  // create a section for each type of restaurant
                  <Section
                     key={index}
                     header={item.title}
                     hideSeparator={true}
                     separatorTintColor="#ccc"
                  >
                     {/* iterate over restaurants of a type of restuarants */}
                     {item.contents.map((content, i) => (
                        // display each restaurant as a cell of the table
                        <RestaurantCustomCell
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
      </SafeAreaView>
   );
}
