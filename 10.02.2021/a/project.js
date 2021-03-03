// let kullanici = {
//   adi: "Ahmet Mutsuz",
//   yas: 35,
// };

// let json = JSON.stringify(kullanici);

// console.log(typeof json);

// let obj = JSON.parse(json);

// console.log(typeof obj);

/// ------------------- //////////// ----------------- //////////////////////
/// JSON

// let oda = {
//   sayi: 23,
// };

// let tanisma = {
//   baslik: "Konferans",
//   katilimcilar: ["ahmet", "mehmet"],
// };

// tanisma.yeri = oda;
// oda.dolduruldu = tanisma;

// JSON.stringify(tanisma);

// let oda = {
//   sayi: 23,
// };

// let tanisma = {
//   baslik: "Konferans",
//   katilimcilar: [{ adi: "Ahmet" }, { adi: "Mehmet" }],
//   yer: oda, // tanışma odayı referans gösteriyor.
// };

// oda.dolduruldu = tanisma; // oda tanışmayı referans gösteriyor.

// alert(JSON.stringify(tanisma, ["baslik", "katilimcilar", "adi"]));
// // {"baslik":"Konferans","katilimcilar":[{},{}]}

/// jSon replacer

// function replacer(key, value) {
//   if (typeof value === "string") {
//     return undefined;
//   }
//   return value;
// }

// var data = {
//   foundation: "Mozilla",
//   model: "box",
//   week: 45,
//   transport: "car",
//   month: 7,
// };
// console.log(JSON.stringify(data, replacer));

// /// To JSON metodu

// let oda = {
//   sayi: 23,
//   toJSON() {
//     return this.sayi;
//   },
// };

// let toplanti = {
//   baslik: "konferans",
//   oda,
// };

// alert(JSON.stringify(oda)); //

// alert(JSON.stringify(toplanti));
// {
//   "baslik":"Konferans",
//   "oda": 23
// }

// let oda = {
//   sayi: 23,
// };

// let tanisma = {
//   baslik: "Konferans",
//   dolduruldu: [{ adi: "Ahmet" }, { adi: "Mehmet" }],
//   yer: oda,
// };

// oda.dolduruldu = tanisma;
// tanisma.self = tanisma;

// alert(
//   JSON.stringify(tanisma, function degistirici(anahtar, deger) {
//     return anahtar != "" && deger == tanisma ? undefined : deger;
//   })
// );

// /*
// {
//   "baslik":"Konferans",
//   "dolduruldu":[{"adi":"Ahmet"},{"adi":"Mehmet"}],
//   "yer":{"sayi":23}
// }
// */
let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {
    // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

console.log(sumSalaries(company));
