export type AdminCategory = {
  id: string;
  name: string;
};

export type AdminDish = {
  id: string;
  categoryId: string;
  foodName: string;
  price: number;
  ingredients: string;
  image: string;
};

export type AdminOrderStatus =
  | "Pending"
  | "Confirmed"
  | "Preparing"
  | "Delivered"
  | "Cancelled";

export type AdminOrder = {
  id: string;
  customerName: string;
  items: string[];
  total: number;
  status: AdminOrderStatus;
  address: string;
  date: string;
  createdAt: string;
};

function createDishImage(
  title: string,
  background: string,
  accent: string,
  detail: string,
) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${background}" />
          <stop offset="100%" stop-color="#ffffff" />
        </linearGradient>
      </defs>
      <rect width="640" height="420" rx="34" fill="url(#bg)" />
      <circle cx="520" cy="82" r="66" fill="${accent}" opacity="0.22" />
      <circle cx="115" cy="318" r="84" fill="${accent}" opacity="0.12" />
      <rect x="98" y="102" width="444" height="214" rx="34" fill="#ffffff" />
      <circle cx="220" cy="210" r="72" fill="${accent}" opacity="0.86" />
      <circle cx="220" cy="210" r="32" fill="#ffffff" opacity="0.9" />
      <rect x="318" y="164" width="144" height="18" rx="9" fill="#172033" opacity="0.9" />
      <rect x="318" y="194" width="112" height="16" rx="8" fill="#4b5563" opacity="0.76" />
      <rect x="318" y="222" width="132" height="16" rx="8" fill="${accent}" opacity="0.72" />
      <text x="98" y="364" fill="#172033" font-family="Arial, sans-serif" font-size="34" font-weight="700">${title}</text>
      <text x="98" y="392" fill="#6b7280" font-family="Arial, sans-serif" font-size="20">${detail}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const adminMockCategories: AdminCategory[] = [
  { id: "cat-appetizers", name: "Appetizers" },
  { id: "cat-salads", name: "Salads" },
  { id: "cat-pizzas", name: "Pizzas" },
  { id: "cat-lunch-favorites", name: "Lunch favorites" },
  { id: "cat-main-dishes", name: "Main dishes" },
  { id: "cat-seafood", name: "Fish & Sea foods" },
  { id: "cat-brunch", name: "Brunch" },
  { id: "cat-desserts", name: "Desserts" },
];

export const adminMockDishes: AdminDish[] = [
  {
    id: "dish-1",
    categoryId: "cat-appetizers",
    foodName: "Brie Crostini Appetizer",
    price: 12.99,
    ingredients: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: createDishImage(
      "Brie Crostini",
      "#fff1ea",
      "#fb7185",
      "Crunchy bites with sweet-salty finish",
    ),
  },
  {
    id: "dish-2",
    categoryId: "cat-appetizers",
    foodName: "Garlic Shrimp Toast",
    price: 13.5,
    ingredients: "Toasted bread, garlic butter shrimp, herbs, and lemon zest.",
    image: createDishImage(
      "Shrimp Toast",
      "#fef3e6",
      "#f97316",
      "Savory toast with bright citrus touch",
    ),
  },
  {
    id: "dish-3",
    categoryId: "cat-salads",
    foodName: "Green Goddess Salad",
    price: 10.5,
    ingredients: "Mixed greens, avocado, cucumber, peas, herbs, and creamy dressing.",
    image: createDishImage(
      "Green Salad",
      "#edfdf3",
      "#22c55e",
      "Fresh herbs with creamy green dressing",
    ),
  },
  {
    id: "dish-4",
    categoryId: "cat-salads",
    foodName: "Roasted Beet Salad",
    price: 11.75,
    ingredients: "Roasted beets, arugula, orange, feta, and balsamic glaze.",
    image: createDishImage(
      "Beet Salad",
      "#fff1f6",
      "#ec4899",
      "Earthy, sweet, and tangy balance",
    ),
  },
  {
    id: "dish-5",
    categoryId: "cat-pizzas",
    foodName: "Truffle Mushroom Pizza",
    price: 18.99,
    ingredients: "Mozzarella, mushroom medley, truffle cream, parmesan.",
    image: createDishImage(
      "Mushroom Pizza",
      "#f6f1ff",
      "#8b5cf6",
      "Rich truffle aroma on crisp crust",
    ),
  },
  {
    id: "dish-6",
    categoryId: "cat-pizzas",
    foodName: "Spicy Pepperoni Pizza",
    price: 17.5,
    ingredients: "Tomato sauce, pepperoni, mozzarella, chili honey.",
    image: createDishImage(
      "Pepperoni",
      "#fff1ef",
      "#ef4444",
      "Classic slice with spicy finish",
    ),
  },
  {
    id: "dish-7",
    categoryId: "cat-lunch-favorites",
    foodName: "Chicken Katsu Bowl",
    price: 15.25,
    ingredients: "Panko chicken, jasmine rice, slaw, pickles, katsu sauce.",
    image: createDishImage(
      "Katsu Bowl",
      "#eef7ff",
      "#3b82f6",
      "Crunchy lunch bowl with slaw",
    ),
  },
  {
    id: "dish-8",
    categoryId: "cat-lunch-favorites",
    foodName: "Steak Rice Plate",
    price: 16.25,
    ingredients: "Grilled steak, garlic rice, egg, onion jam, chimichurri.",
    image: createDishImage(
      "Steak Plate",
      "#fdf2f2",
      "#dc2626",
      "Comfort plate with bold flavors",
    ),
  },
  {
    id: "dish-9",
    categoryId: "cat-main-dishes",
    foodName: "Braised Short Rib",
    price: 24.5,
    ingredients: "Slow braised beef, potato puree, glazed carrot, pan jus.",
    image: createDishImage(
      "Short Rib",
      "#fff7ed",
      "#ea580c",
      "Slow cooked and deeply savory",
    ),
  },
  {
    id: "dish-10",
    categoryId: "cat-main-dishes",
    foodName: "Herb Butter Chicken",
    price: 19.75,
    ingredients: "Roasted chicken, herb butter, mash, green beans.",
    image: createDishImage(
      "Butter Chicken",
      "#f0fdf4",
      "#16a34a",
      "Golden roast with herb finish",
    ),
  },
  {
    id: "dish-11",
    categoryId: "cat-seafood",
    foodName: "Seared Salmon Fillet",
    price: 22.99,
    ingredients: "Salmon, beurre blanc, charred asparagus, lemon.",
    image: createDishImage(
      "Salmon",
      "#eff6ff",
      "#0ea5e9",
      "Crisp skin and bright butter sauce",
    ),
  },
  {
    id: "dish-12",
    categoryId: "cat-seafood",
    foodName: "Garlic Butter Prawns",
    price: 21.5,
    ingredients: "Prawns, garlic butter, herbs, toasted sourdough.",
    image: createDishImage(
      "Prawns",
      "#fff7ed",
      "#f59e0b",
      "Rich butter sauce with herbs",
    ),
  },
  {
    id: "dish-13",
    categoryId: "cat-brunch",
    foodName: "Berry Cream Pancakes",
    price: 12.25,
    ingredients: "Fluffy pancakes, berries, cream, syrup, powdered sugar.",
    image: createDishImage(
      "Pancakes",
      "#fff1f6",
      "#f43f5e",
      "Soft stack with berry topping",
    ),
  },
  {
    id: "dish-14",
    categoryId: "cat-brunch",
    foodName: "Avocado Egg Toast",
    price: 11.99,
    ingredients: "Sourdough, smashed avocado, poached egg, chili flakes.",
    image: createDishImage(
      "Avocado Toast",
      "#ecfdf5",
      "#10b981",
      "Classic brunch with poached egg",
    ),
  },
  {
    id: "dish-15",
    categoryId: "cat-desserts",
    foodName: "Burnt Cheesecake",
    price: 8.99,
    ingredients: "Cream cheese, vanilla bean, caramelized top, berry sauce.",
    image: createDishImage(
      "Cheesecake",
      "#fff9db",
      "#eab308",
      "Creamy center with caramel top",
    ),
  },
  {
    id: "dish-16",
    categoryId: "cat-desserts",
    foodName: "Chocolate Tart",
    price: 9.25,
    ingredients: "Dark chocolate ganache, sea salt, cocoa crust, cream.",
    image: createDishImage(
      "Chocolate Tart",
      "#f5f3ff",
      "#7c3aed",
      "Deep cocoa flavor with silk finish",
    ),
  },
];

export const adminMockOrders: AdminOrder[] = [
  {
    id: "ORD-1024",
    customerName: "Ariunaa B.",
    items: ["Brie Crostini Appetizer", "Green Goddess Salad"],
    total: 23.49,
    status: "Pending",
    address: "Sukhbaatar district, 1st khoroo",
    date: "2024/12/20",
    createdAt: "10:14 AM",
  },
  {
    id: "ORD-1025",
    customerName: "Temuulen G.",
    items: ["Chicken Katsu Bowl", "Burnt Cheesecake"],
    total: 24.24,
    status: "Confirmed",
    address: "Bayanzurkh district, 25th khoroo",
    date: "2024/12/20",
    createdAt: "10:22 AM",
  },
  {
    id: "ORD-1026",
    customerName: "Sarnai D.",
    items: ["Seared Salmon Fillet", "Roasted Beet Salad"],
    total: 34.74,
    status: "Preparing",
    address: "Khan-Uul district, 15th khoroo",
    date: "2024/12/20",
    createdAt: "10:31 AM",
  },
  {
    id: "ORD-1027",
    customerName: "Munkh-Erdene T.",
    items: ["Spicy Pepperoni Pizza", "Garlic Butter Prawns"],
    total: 39.0,
    status: "Delivered",
    address: "Chingeltei district, 4th khoroo",
    date: "2024/12/20",
    createdAt: "09:48 AM",
  },
  {
    id: "ORD-1028",
    customerName: "Boloroo N.",
    items: ["Avocado Egg Toast", "Berry Cream Pancakes"],
    total: 24.24,
    status: "Preparing",
    address: "Bayangol district, 3rd khoroo",
    date: "2024/12/20",
    createdAt: "10:41 AM",
  },
  {
    id: "ORD-1029",
    customerName: "Test@gmail.com",
    items: ["Truffle Mushroom Pizza", "Burnt Cheesecake"],
    total: 27.98,
    status: "Cancelled",
    address: "SBD, 12-r horoo, negdsen emnelegiin baruun tal",
    date: "2024/12/20",
    createdAt: "10:58 AM",
  },
  {
    id: "ORD-1030",
    customerName: "Amgalan",
    items: ["Seared Salmon Fillet", "Chocolate Tart"],
    total: 31.98,
    status: "Pending",
    address: "SBD, 12-r horoo, SBD negdsen emnelegiin urd tal",
    date: "2024/12/20",
    createdAt: "11:06 AM",
  },
];
