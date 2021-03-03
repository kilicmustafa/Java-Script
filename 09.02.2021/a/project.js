// let set = new Set(["Portakal", "Elma", "Muz", "Kiraz", "Vişne", "Kızılcık"]);

// for (let [key1, key2] of set.entries()) {
//   console.log(key1, key2);
// }

// // array ile map oluşturman

// const map1 = new Map([["kiraz", 10], ["muz", 15], [("greyfurt", 8)]]);

// // Obje ile mep oluşturmak

// let map = new Map(
//   Object.entries({
//     name: "John",
//     age: 30,
//   })
// );

// weakMap ve Map karşılaştırması

// let eda = { name: "Eda" };

// let ziyaretciSayisiMap = new Map();

// ziyaretciSayisiMap.set(eda, 123);

// eda = null;

// alert(ziyaretciSayisiMap.size);

// /// another methapor

// eda = { name: "Eda" };
// let ziyaretciSayisiWeakMap = new WeakMap();

// ziyaretciSayisiWeakMap.set(eda, 123);

// eda = null;

// alert(ziyaretciSayisiWeakMap.size);

let messages = [
  { mesaj: "Hello", kimden: "John" },
  { mesaj: "Nasıl gidiyor ?", kimden: "John" },
  { mesaj: "Görüşürüz", kimden: "Alice" },
];

let unreadSet = new WeakSet(messages);
alert(unreadSet.has(messages[1]));

messages.shift();
messages.shift();
alert(unreadSet.has(messages[0]));
