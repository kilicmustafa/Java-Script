// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     let sorted = word.toLowerCase().split("").sort().join("");

//     map.set(sorted, word);
//   }

//   return Array.from(map.values());
// }
// let arr = ["aks", "alim", "açlık", "ask", "ilam", "çalık"];

// alert(aclean(arr));

// function atemiz(arr) {
//   let obj = {};
//   for (let word of arr) {
//     let sorted = word.toLowerCase().split("").sort().join("");
//     obj[sorted] = word;
//   }

//   return Array.from(Object.values(obj));
// }

// Homework 2  okunmamış mesajlar
let mesajlar = [
  { metin: "Merhaba", kimden: "Ahmet" },
  { metin: "Nasıl Gidiyor?", kimden: "Ahmet" },
  { metin: "Sonra görüşürüz", kimden: "Mehmet" },
];

let weatMap_Messages = new WeakSet();

weatMap_Messages.add(mesajlar[0]);
weatMap_Messages.add(mesajlar[1]);
weatMap_Messages.add(mesajlar[2]),
  console.log("Read Message 0: ", weatMap_Messages.has(mesajlar[0]));
mesajlar.shift();
console.log("Read Message 0: ", weatMap_Messages.has(mesajlar[0]));

/// Homework 3 Mesajlar ne zaman okundu
let mesajlar = [
  { metin: "Merhaba", kimden: "Ahmet" },
  { metin: "Nasıl Gidiyor?", kimden: "Ahmet" },
  { metin: "Sonra görüşürüz", kimden: "Mehmet" },
];

let weatMap_Messages_when = new WeakMap();

weatMap_Messages_when.set(mesajlar[0], new Date(2021, 02, 21));
weatMap_Messages_when.set(mesajlar[1], "21:00");
weatMap_Messages_when.set(mesajlar[2], "22:00");

mesajlar.shift();
