//console.log(this);

let value;

value = document;
value = document.all;
value = document.all.length;
value = document.all[0];
value = document.all[6];
value = document.all[document.all.length - 1];

value = document.body;
value = document.head;
value = document.location;
value = document.location.hostname;
value = document.location.port;

value = document.URL;
value = document.characterSet;
console.log("--------", value);

const elements = document.all; // HTML Collection

for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
}

// Html collectionlar direk olarak for each ile kullanılamaz
// elements.forEach(function (i) {
//   console.log(i);
// });

// ama bu sorunu html Collectionu array yapısına dönüştürerek yapabiliriz
const collection = Array.from(elements);

collection.forEach((elements) => {
  console.log(elements);
});

console.log(typeof collection);

collection.forEach((elements) => {
  console.log(elements);
});

console.log(typeof collection);
