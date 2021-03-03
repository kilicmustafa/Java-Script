// const makarna = ["Sade Makarna", "Soslu makarna", "Yoğurlu makarna"];
// const corba = ["Tarhana", "Yoğurlu çorba", "Domates Çorbası"];

// const mcMix = [...makarna, ...corba];

// for (const item of makarna) console.log(item);

// for (const [index, ogun] of mcMix.entries()) console.log(index, ogun);

for (const [index, ogun] of mxMix.entries()) console.log(index, ogun);

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
