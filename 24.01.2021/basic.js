// take value from array

let array1 = [10, 20, 30, 40];
let [value1, value2] = array1;

console.log(value1, value2);

// take value from dictonary

let numbers = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
  e: 50,
  f: 60,
  g: 70,
};

const { c: number3, d: number4 } = numbers;
console.log(number3, number4);

// take value from function
const getLangs = () => ["py", "js", "class"];

const [lang1, lang2, lang3] = getLangs();
console.log(lang1, lang2, lang3);

// -- dictonary
const person = {
  name: "Pınar",
  year: 2010,
  salary: 100,
  showInfos: () => console.log("bilgiler gösteriliyor"),
};

const {
  name: isim,
  year: yil,
  salary: maas,
  showInfos: bilgileriGoster,
} = person;
console.log(isim, yil, maas);
bilgileriGoster();

//-- end of arr
const arr3 = [10, 20, 333, 4221, 5432, 36, 75];
const [a, ...aa] = arr3;
console.log(a);
console.log(aa);

//--
const addNumber = (x, y, z) => x + y + z;
console.log(addNumber(...arr3));

for (let index in arr3) {
  // index değeriyle iş yapar
  console.log(index, arr3[index]);
}

console.log("Ayrım --------------------");
for (let value of arr3) {
  console.log(value);
}
