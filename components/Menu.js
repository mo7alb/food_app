// importing important components and hooks
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { TableView, Section, Cell } from "react-native-tableview-simple";

// styles for the components used within the functional components
const styles = StyleSheet.create({
   mainScrollView: {
      height: "100%",
   },
});

// an object that contains the content of the Menu list table view
const tableData = {
   items: [
      {
         title: "Gelato",
         contents: [
            { title: "Vanilla" },
            { title: "Chocolate" },
            { title: "Mint" },
         ],
      },
      {
         title: "Coffee",
         contents: [
            { title: "Flat White" },
            { title: "Latte" },
            { title: "Caffe Americano" },
         ],
      },
      {
         title: "Burger",
         contents: [
            { title: "Beef" },
            { title: "Turkey" },
            { title: "Cheese" },
         ],
      },
   ],
};

/**
 * A function component that displays list of menu items and add functionality to it
 * @returns JSX to a react function component
 */
export default function Menu() {
   return (
      <ScrollView style={styles.mainScrollView}>
         <TableView>
            {tableData.items.map((item, i) => (
               <Section key={i} header={item.title}>
                  {item.contents.map((content, index) => (
                     <Cell key={index} title={content.title} />
                  ))}
               </Section>
            ))}
         </TableView>
      </ScrollView>
   );
}
