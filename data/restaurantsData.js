export const restaurantsData = {
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