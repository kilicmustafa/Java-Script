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

const dayys = Object.keys(openingHours);

let strrOpen = `We open ${dayys.length} days on : `;

for (const dayy of dayys) {
  strrOpen += ` ${dayy} `;
}
console.log(strrOpen);

for (const [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`Day : ${day} open : ${open} close : ${close}`);
}

const array_ = [];

console.log(array_[0]?.name ?? "Boş array...");

if (array_.length > 0) {
  console.log(array_);
} else {
  console.log("Array boş ..");
}

for (const opCloses of Object.values(openingHours)) {
  console.log("Day");
  console.log(opCloses.open);
  console.log(opCloses.close);
}

const users = [];

console.log(users[0]?.name ?? "Array boş");

if (users.length > 0) {
  console.log(users.name);
} else {
  console.log("Boş array");
}

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

for (const [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`day : ${day} ,openHours : ${open}  ,closeHours : ${close}`);
}

const properties = Object.keys(openingHours);

let strOpen = `we are open on ${properties.length} days on`;

for (const day of properties) {
  strOpen += ` ${day} `;
}
console.log(strOpen);

for (const opclose of Object.values(openingHours)) {
  console.log(opclose);
}

for (const [days, { open, close }] of Object.entries(openingHours)) {
  console.log(`days : ${days}  open : ${open}  close : ${close}`);
}

for (const [days, { open, close }] of Object.entries(openingHours)) {
  console.log(`day : ${days}, open : ${open}, close : ${close} `);
}
