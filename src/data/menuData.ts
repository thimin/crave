export interface MenuItem {
  name: string;
  description?: string;
  details: string[];
}

export const menuItems: MenuItem[] = [
  {
    name: "Fluff Blossom Marshmallows",
    details: [
      "Flavors: Strawberry | Kiwi | Passionfruit | Pineapple | Mango | Grape | Pomegranate | Orange",
      "Key Ingredients: Gelatin, Sugar, Fruit Flavoring"
    ]
  },
  {
    name: "ChocoBerry Dreams",
    details: [
      "White Chocolate | Dark Chocolate | Customized Designs",
      "Key Ingredients: Fresh Strawberries, Chocolate"
    ]
  },
  {
    name: "Fruity Sparkles",
    details: [
      "Flavors: Strawberry | Orange | Pineapple | Passionfruit | Tamarind",
      "Key Ingredients: Sugar, Fruit Flavoring"
    ]
  },
  {
    name: "Magic Pop Cake Pops",
    details: [
      "Flavors: Vanilla | Chocolate | Custom Designs",
      "Key Ingredients: Cake, Buttercream, Chocolate Coating"
    ]
  },
  {
    name: "Berry Bliss Brownies",
    description: "With Strawberries",
    details: [
      "Key Ingredients: Cocoa, Butter, Sugar, Eggs, Strawberries"
    ]
  },
  {
    name: "Roseberry Fantasy",
    description: "Fresh Roses with Chocolate Coated Strawberries – Basic or Customized",
    details: [
      "Key Ingredients: Roses, Strawberries, Chocolate"
    ]
  },
  {
    name: "Rainbow Orchard",
    description: "Fresh Mixed Fruits – Grapes, Strawberries, Blueberries, Orange, Apple, Kiwi, Pomegranate, Blackberry",
    details: [
      "Key Ingredients: Fresh Fruits"
    ]
  },
  {
    name: "Sweet Canvas Cookies",
    description: "Custom Iced Sugar Cookies",
    details: [
      "Key Ingredients: Flour, Sugar, Butter, Icing"
    ]
  },
  {
    name: "Tangy Treasure Achcharu",
    details: [
      "Flavors: Pineapple | Weralu | Nelli | Tamarind | Ambarella | Wood apple | Lovi",
      "Key Ingredients: Fresh Fruits, Vinegar, Spices"
    ]
  },
  {
    name: "Macaron Majesty",
    details: [
      "Flavors: Strawberry | Pistachio | Chocolate | Vanilla | Lemon | Hazelnut",
      "Key Ingredients: Almond Flour, Sugar, Egg Whites, Buttercream Filling"
    ]
  },
  {
    name: "Snack Symphony",
    details: [
      "Chips: Pringles | Lays | Doritos | Cassava Chips | Sunflower Seeds",
      "Nuts: Mixed | Pistachio | Peanut | Almond | Cashew",
      "Dips: Tomato Sauce | Cheese Sauce | Cheese & Kochchi Sauce"
    ]
  },
  {
    name: "Popcorn Paradise",
    details: [
      "Flavors: Chocolate | Caramel | Spicy | Salted Butter | Cheese",
      "Key Ingredients: Popcorn, Butter/Oil, Flavorings"
    ]
  }
];

export const externalItems: string[] = [
  "Gourmet Gummies",
  "Artisan Lollipops",
  "Premium Chocolate Bars (Hershey’s)",
  "Ferrero Rocher"
];
