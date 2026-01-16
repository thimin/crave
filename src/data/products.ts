export interface ProductVariation {
  name: string;
  price: number;
  description?: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  variations: ProductVariation[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Marshmallow Edible Bouquet",
    description: "A gorgeous, fully edible bouquet made of handmade marshmallow flowers. Includes 100 flowers.",
    image: "/images/marshmallow-bloom2.jpeg",
    variations: [
      { name: "Vanilla", price: 11410 },
      { name: "Strawberry", price: 9100 },
      { name: "Kiwi", price: 9170 },
      { name: "Passion Fruit", price: 8550 },
      { name: "Pineapple", price: 8680 },
      { name: "Mango", price: 8790 },
      { name: "Grape", price: 9300 },
      { name: "Pomegranate", price: 9100 },
      { name: "Orange", price: 8890 },
    ]
  },
  {
    id: 2,
    name: "Chocolate Coated Strawberries Basket",
    description: "Fresh juicy strawberries dipped in premium chocolate, arranged in a luxurious gift basket. Includes 100 strawberries.",
    image: "/images/strawberry-tower.png",
    variations: [
      { name: "Dark Chocolate Coated", price: 10650 },
      { name: "White Chocolate Coated", price: 10650 },
      { name: "Customized", price: 13250, description: "Personalized with your choice of chocolate & decorations" },
    ]
  },
  {
    id: 3,
    name: "Mix Candy Bloom Massive Bouquet",
    description: "A massive, colorful bouquet filled with lollipops, marshmallow flowers, sour belts, and various candies. Includes 60 candies.",
    image: "/images/candy-bloom.jpeg",
    variations: [
      { name: "Mixed", price: 15530 },
    ]
  },
  {
    id: 4,
    name: "Different Fruit Flavored Candy Bouquet",
    description: "A cheerful bouquet packed with 250 candies in various tropical fruit flavors.",
    image: "/images/fruit-candy-bouquet.jpeg",
    variations: [
      { name: "Mixed Fruit Flavors", price: 9200, description: "Strawberry, orange, pineapple, tamarind, passion fruit & more" },
    ]
  },
  {
    id: 5,
    name: "Cake Pops Bouquet",
    description: "Delicious cake pops arranged in a stunning bouquet. Includes 100 cake pops.",
    image: "/images/cake-pops.jpeg",
    variations: [
      { name: "Butter Cake Pops", price: 18000 },
      { name: "Chocolate Cake Pops", price: 20570 },
      { name: "Customized", price: 20590, description: "Made & decorated to your special request" },
    ]
  },
  {
    id: 6,
    name: "Berry - Brownie Mix Basket",
    description: "Half decadent fudgy brownies + half fresh berries dipped in chocolate (50:50).",
    image: "/images/berry-brownie.jpeg",
    variations: [
      { name: "Berry + Brownie Mix", price: 19525 },
    ]
  },
  {
    id: 7,
    name: "Fresh Red Roses & Chocolate Coated Strawberry Basket",
    description: "Romantic combination of fresh red roses and chocolate-dipped strawberries (Romance Duo 50:50).",
    image: "/images/roses-strawberries.jpeg",
    variations: [
      { name: "Normal Basket", price: 19640 },
      { name: "Personalized Basket", price: 22440, description: "With custom strawberry art/decor" },
    ]
  },
  {
    id: 8,
    name: "Mixed Fruit Bloom Bouquet",
    description: "Fresh fruits displayed in modern transparent spheres for a fresh, stylish gift. Includes 55 transparent balls with 7 fruits.",
    image: "/images/fruit-bloom.jpeg",
    variations: [
      { name: "Mixed Fresh Fruits", price: 26600, description: "Grapes, strawberries, orange, apple, kiwi, pomegranate & more" },
    ]
  },
  {
    id: 9,
    name: "Sugar Cookie Bouquet",
    description: "Handmade, beautifully decorated sugar cookies arranged like flowers in a bouquet. Includes 50 cookies.",
    image: "/images/cookie-bouquet.jpeg",
    variations: [
      { name: "Decorated Sugar Cookies", price: 11702 },
    ]
  },
  {
    id: 10,
    name: "Golden Anniversary Luxe Bouquet",
    description: "Premium luxury mix of Ferrero Rocher, chocolate bars, caramel clusters, and more. Includes 60 items.",
    image: "/images/golden-luxe.png",
    variations: [
      { name: "Luxury Chocolates & Sweets", price: 20440 },
    ]
  },
  {
    id: 11,
    name: "Achcharu (Pickle) Basket",
    description: "Traditional Sri Lankan fruit pickles in 6 different flavors, presented in clear balls. Includes 30 transparent balls.",
    image: "/images/pickle-balls.png",
    variations: [
      { name: "6 Different Sri Lankan Pickles", price: 16880 },
    ]
  },
  {
    id: 12,
    name: "Macaron & Roses Basket",
    description: "Colorful French macarons in 5 flavors + fresh roses (25:25).",
    image: "/images/macaron-roses.jpeg",
    variations: [
      { name: "Mixed Macaron Flavors + Roses", price: 13610 },
    ]
  },
  {
    id: 13,
    name: "Snack Bouquet with Dipping Sauce",
    description: "Popular snacks (Pringles, Lays, nuts etc.) + 3 tasty dipping sauces. Includes 40 snacks.",
    image: "/images/snack-bouquet.png",
    variations: [
      { name: "Mixed Snacks + 3 Dipping Sauces", price: 22870 },
    ]
  },
  {
    id: 14,
    name: "Gummy Bouquet",
    description: "Large bouquet made with many colorful & sour gummy varieties.",
    image: "/images/gummy-bouquet.jpeg",
    variations: [
      { name: "Mixed Gummy Varieties", price: 22170 },
    ]
  },
  {
    id: 15,
    name: "Flavored Popcorn Bouquet",
    description: "Gourmet popcorn in multiple flavors arranged as a fun bouquet.",
    image: "/images/popcorn-bouquet.png",
    variations: [
      { name: "Mixed Flavors", price: 6780, description: "Chocolate, Caramel, Cheese, Spicy etc." },
    ]
  }
];
