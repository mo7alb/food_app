import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
   // cart state
   const [cart, setCart] = useState({ count: 0, items: [] });

   // function to add an item to the cart
   const add = id => {
      setCart(prev => {
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
   const remove = (id, complete) => {
      setCart(prev => {
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

   return (
      <CartContext.Provider value={{ cart, add, remove }}>
         {children}
      </CartContext.Provider>
   );
}
