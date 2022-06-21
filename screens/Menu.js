// importing important components, hooks and other items from different files and libraries
import { ScrollView, StyleSheet } from "react-native";
import { TableView, Section, Cell } from "react-native-tableview-simple";
import { useState } from "react";
import Cart from "../components/Cart";
import MenuCustomCell from "../components/MenuCustomCell";
import { menuItems as tableData } from "../data/menuItems";

// styles for the components used within the functional components
const styles = StyleSheet.create({
   mainScrollView: {
      height: "100%",
   },
});

/**
 * A function component that displays list of menu items and add functionality to it
 * @returns JSX to a react function component
 */
export default function Menu() {
   // cart state
   const [cart, setCart] = useState({ count: 0, items: {} });

   // function to add an item to the cart
   const add = item => {
      let qty = cart.items[item] === undefined ? 0 : cart.items[item];
      setCart(previous => ({
         count: previous.count + 1,
         items: { ...previous.items, [item]: qty + 1 },
      }));
   };

   // function to remove an item from the cart
   const remove = item => {
      let qty = cart.items[item] === undefined ? 0 : cart.items[item];

      setCart(previosState => {
         return {
            count:
               qty > 0
                  ? previosState.count > 0
                     ? previosState.count - 1
                     : 0
                  : previosState.count,
            items: { ...previosState.items, [item]: qty > 0 ? qty - 1 : 0 },
         };
      });
   };

   return (
      <ScrollView style={styles.mainScrollView}>
         <TableView>
            {tableData.items.map((item, i) => (
               <Section key={i} header={item.title}>
                  {item.contents.map((content, index) => (
                     <MenuCustomCell
                        key={index}
                        title={content.title}
                        img={content.imguri}
                        add={add}
                        remove={remove}
                     />
                  ))}
               </Section>
            ))}
         </TableView>
         <Cart state={cart} />
      </ScrollView>
   );
}
