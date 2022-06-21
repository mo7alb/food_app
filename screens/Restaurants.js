// import important hooks and components
import { ScrollView, StyleSheet } from "react-native";
import { Section, TableView } from "react-native-tableview-simple";
import RestaurantCustomCell from "../components/RestaurantCustomCell";
import { restaurantsData as data } from "../data/restaurantsData";

const styles = StyleSheet.create({
   scrollView: { height: "100%" },
});

/**
 * A functional component that describes the restaurants screen
 * @param {Object} param0 props passed to the component
 * @returns JSX of a react functional component
 */
export default function Restaurants({ navigation }) {
   const action = () => navigation.navigate("Menu");
   return (
      <ScrollView style={styles.scrollView}>
         <TableView>
            {data.items.map((item, index) => (
               <Section
                  key={index}
                  header={item.title}
                  hideSeparator={true}
                  separatorTintColor="#ccc"
               >
                  {item.contents.map((content, i) => (
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
   );
}
