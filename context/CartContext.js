/**
 * This is a context used to store the state cart and its related
 * functionality
 */

// hooks
import { createContext, useState } from "react";

// create a new context
export const CartContext = createContext();

/**
 * Provides cart state as a context to the components passed to it as a children
 * @param {Object} param0 props containing the children of the parent element
 * @returns React component
 */
export default function CartProvider({ children }) {
   // cart state
   const [cart, setCart] = useState({ count: 0, items: [] });

   // function to add an item to the cart
   const add = id => {
      // update cart state based on the previous state (prev)
      setCart(prev => {
         // return an object as the new state
         // object contains a count that is one more than the previos
         // object filters the previous list of items and adds
         // all the items except the one with the id passed through it
         // for the id passed through the function it creates a new object
         // this object has a count of 1 if it was not defined before
         // otherwise it gets the previous size and adds one
         return {
            count: prev.count + 1,
            items: [
               ...prev.items.filter(item => item.id !== id),
               {
                  id,
                  count:
                     prev.items.find(item => item.id == id) == undefined
                        ? 1
                        : prev.items.find(item => item.id == id).count + 1,
               },
            ],
         };
      });
   };

   // function to remove an item from the cart
   const remove = (id, complete = false) => {
      setCart(prev => {
         // return an object as the new state
         // object contains a count that is one less than the previos
         // object filters the previous list of items and adds
         // all the items except the one with the id passed through it
         // for the id passed through the function it creates a new object
         // this object has a count of 0 if it was not defined before
         // otherwise it gets the previous size and subtracts one
         return {
            count: prev.count > 0 ? prev.count - 1 : 0,
            items: [
               ...prev.items.filter(item => item.id !== id),
               {
                  id,
                  count:
                     prev.items.find(item => item.id == id) == undefined
                        ? 0
                        : complete == true
                        ? prev.items.find(item => item.id == id).count -
                          prev.items.find(item => item.id == id).count
                        : prev.items.find(item => item.id == id).count - 1,
               },
            ],
         };
      });
   };

   // provide the cart state and add and remove functions through context provider
   return (
      <CartContext.Provider value={{ cart, add, remove }}>
         {children}
      </CartContext.Provider>
   );
}
