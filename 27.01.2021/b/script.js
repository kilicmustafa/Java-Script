// const array = [1, 2, [3, 4, 5, 6, 7, 8]];

// const [i, , [j, k, l, m]] = array;
// console.log(i, j, k, l, m);

// const [x = 1, y = 1, z = 1] = [10, 20];

// console.log(x, y, z);

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Nefis yemekler",
  location: "erzincan",
  categories: ["Erzurum", "Erzincan", "Trabzon", "Adana"],
  mainMenu: ["Kuru Fasulye", "Bezelye", "Kuzu çevirme", "Pilav"],
  starterMenu: ["mercimek çorbası", "Şehriye çorbası", "yoğurlu çorba"],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", adress }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restorantAdi,
  openingHours: acilisSaati,
  categories: kategoriler,
} = restaurant;

console.log(restorantAdi, acilisSaati, kategoriler);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutanding variables
let a = 111;
let b = 999;

const obj = { a: 10, b: 23, c: 50 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: "23:48",
  adress: "başbağlar mah.",
  mainIndex: 3,
  starterIndex: 0,
});

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

/*
// Destructuring Objects
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
  });
  
  restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
  });
  
  const { name, openingHours, categories } = restaurant;
  console.log(name, openingHours, categories);
  
  const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
  } = restaurant;
  console.log(restaurantName, hours, tags);
  
  // Default values
  const { menu = [], starterMenu: starters = [] } = restaurant;
  console.log(menu, starters);
  
  // Mutating variables
  let a = 111;
  let b = 999;
  const obj = { a: 23, b: 7, c: 14 };
  ({ a, b } = obj);
  console.log(a, b);
  
  // Nested objects
  const {
    fri: { open: o, close: c },
  } = openingHours;
  console.log(o, c);
  
  
  ///////////////////////////////////////
  // Destructuring Arrays
  const arr = [2, 3, 4];
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];
  
  const [x, y, z] = arr;
  console.log(x, y, z);
  console.log(arr);
  
  let [main, , secondary] = restaurant.categories;
  console.log(main, secondary);
  
  // Switching variables
  // const temp = main;
  // main = secondary;
  // secondary = temp;
  // console.log(main, secondary);
  
  [main, secondary] = [secondary, main];
  console.log(main, secondary);
  
  // Receive 2 return values from a function
  const [starter, mainCourse] = restaurant.order(2, 0);
  console.log(starter, mainCourse);
  
  // Nested destructuring
  const nested = [2, 4, [5, 6]];
  // const [i, , j] = nested;
  const [i, , [j, k]] = nested;
  console.log(i, j, k);
  
  // Default values
  const [p = 1, q = 1, r = 1] = [8, 9];
  console.log(p, q, r);
  */
