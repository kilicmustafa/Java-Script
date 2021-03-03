// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);
// console.log(ordersSet);

// console.log(new Set("mustafa"));

// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Pide"));

// ordersSet.add("Garlic Bread");
// ordersSet.delete("Risotto");

// for (order of ordersSet) {
//   console.log(order);
// }
// const cars = new Set([
//   "Bugatti",
//   "Porsche",
//   "Tofaş",
//   "Brodway",
//   "Tofaş",
//   "Lamborghini",
//   "Lamborghini",
// ]);
// console.log(cars);
// cars.has("Lamborghini");
// cars.delete("Tofaş");
// cars.clear();
// console.log(cars);

// console.log(new Set("Mustafa "));

// const staff2 = [
//   "Temizlikçi",
//   "Bekçi",
//   "Polis",
//   "Doktor",
//   "Eczacı",
//   "Öğretmen",
//   "Temizlikçi",
// ];

// const staffSet = [...new Set(staff2)];

// console.log(staffSet);

// console.log(new Set("Tekrarasız harf sayısı alma methodu").size);

// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)];

// console.log(staffUnique);
// console.log(new Set("MUSTAFA KILIÇ").size);

const newMap = new Map();

newMap.set("anaktar", "Değer");
//console.log(newMap.set("girdi1", "cikti1"));
// console.log(newMap.get("anaktar"));// anaktar key ile sesler
// console.log(newMap.get("Değer"));

for (const [key, value] of newMap.entries()) {
  console.log(key, value);
}
/*

// Maps : Fundamentals
const rest = new Map();
rest.set("name", "Classico italiano");
rest.set(1, "Firenze ,italy");
console.log(rest.set(2, "Lisbon Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open ")
  .set(false, "We are closed");

console.log(rest.get("name"));
console.log(rest.get(1));
console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
rest.clear();

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/
