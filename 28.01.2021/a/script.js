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

// The spread Operator (...)

// const arr1 = [1, 2, 3];
// const arr2 = [5, 4, arr1[0], arr1[1], arr1[2]];
// console.log(...arr2);

// const arr3 = [8, 9, ...arr2];
// console.log(arr3);
// const joinArr = [...arr1, ...arr2];
// console.log(joinArr);

// const name = "Mustafa";
// const arr4 = [...name, "kılıç"];
// console.log(...arr4);

// Real-World example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1 ?? "),
//   prompt("Ingredient 2 ?? "),
//   prompt("Ingredient 3 ?? "),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

///////////////////////////////////////////////////////
// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // objects
// const { sat, ...weekdayss } = restaurant.openingHours;
// console.log(sat);
// console.log(weekdayss);
// console.log(weekdayss.thu);
// console.log(weekdayss.fri);

// // 2=> Functions

// const func1 = function (...counts) {
//   let sum = 0;
//   for (i = 0; i < counts.length; i++) sum += counts[i];
//   console.log(sum);
// };
// func1(99, 100, 200);

// const x = [1, 220, 12312];
// func1(...x);

/////////////////////////////////
// && ------ ||

console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(null || undefined);

console.log(10 || 11);
console.log("sen" || "asdaasdasgfsdfsd");
console.log(true || 0);
console.log(undefined || null);

console.log(null || undefined || 0 || "" || "Merhaba" || 1);

restaurant.numGuest = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log("--------------AND--------------------");
console.log("Mustafa" && 0);
console.log(0 && "Mustafa");
console.log(7 && "Mustafa");
console.log(0 && 1);
console.log(1 && 0);
console.log("a" && "");
console.log("" && "a");
console.log(undefined && null);
console.log(null && undefined);

console.log("hello" && 23 && null && "jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

restaurant.numGuest = 1;
const guests = restaurant.numGuest || 10;
const guests2 = restaurant.numGuest && 10;
console.log(guests);
console.log(guests2);

const guestCorrect = restaurant.numGuest ?? 0; // || ifadesi yerine geçer
console.log(guestCorrect);
