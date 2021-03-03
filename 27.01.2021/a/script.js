// var x = 1;
// let y = 2;
// const z = 3;

// console.log(this);
// console.log("****************");
// console.log(this.x);

// console.log(this);
// let calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// function fingers_cross() {
//   console.log(this);
// }

// fingers_cross();
// const arrow_ = () => console.log(this);

// arrow_();

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matila = {
//   year: 2017,
// };

// matila.calcAge = jonas.calcAge;
// matila.calcAge();

// Not = Eğer demet içerisinde yeni normal fonksiyon oluşturursak, artık this objemiz o fonksiyondur
// ama arrow fonksiyon ile oluşturursak this objemiz windowdur.

// function bi önceki objenin nesnelerine erşebilir ama arraw function hepsine
// arrow function için bir üst sınıf this sınıfıdır ama daha üstte tanımlı nesnelere erişebilir

//----------------------------------------------

// // var firstName = "Matilda";

// // const jonas = {
// //   firstName: "Jonas",
// //   year: 1991,

// //   calcAge: function () {
// //     const a = 10;
// //     console.log("-------calcAge------------");
// //     console.log(this); //F
// //     const arrow = () => {
// //       oncelik üst nesne ayrıca window objesine erişebilir
// //       console.log(this.year); //1991
// //       console.log(a); // 10
// //       console.log(firstName); // Matilda
// //       console.log(this.firstName); //jonas
// //       console.log(this); //F
// //     };
// //     arrow();
// //     console.log("***************");
// //     function func() {
// //       window obje
// //       console.log(this.year); // undefined
// //       console.log(a); //10
// //       console.log(firstName); //matilda
// //       console.log(this.firstName); //matilda
// //       console.log(this); //Window
// //     }
// //     func();
// //   },

// //   func_: function () {
// //     console.log("--------_FUNC_---------");
// //     console.log(this.year); //1991
// //     console.log(firstName); // Matilda
// //     console.log(this.firstName); //jonas
// //     console.log(this); // func
// //   },

// //   arrow_: () => {
// //     console.log("-------_ARROW_----------");
// //     console.log(this.year); // undefined
// //     console.log(firstName); //matilda
// //     console.log(this.firstName); //matilda
// //     console.log(this); // window

// //     const newArrow = () => {
// //       console.log("-------------_NewARROW_----------");
// //       console.log(this); // Window
// //     };
// //     newArrow();
// //   },
// // };
// // jonas.calcAge();
// // jonas.func_();
// // jonas.arrow_();

//-------------------------
// arguments keyword
//

// function func(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// func(1, 2);
// func(1, 2, 3, 4, 5, 6);

// const func_const = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// func_const(1, 2);
// func_const(2, 4, 5, 6, 7);

// const arrow_ = (a, b) => {
//   //console.log(arguments);
//   return a + b;
// };

// arrow_(1, 2);

//------------------------------------------------
// // Objects vs. primitives
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "Jonas",
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log("Friend:", friend);
// console.log("Me", me);

// let age = 19;
// let old_age = age;
// age = 20;
// console.log(age);
// console.log(old_age);

// const zeynep = {
//   age: 19,
// };
// const habibe = zeynep;

// zeynep.age = 30;

// console.log(zeynep.age); //30
// console.log(habibe.age); //30

// Primitive types
//-----------------------------------

// const jessica = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";
// console.log("Before marriage:", jessica);
// console.log("After marriage: ", marriedJessica);
// // marriedJessica = {};

// // Copying objects
// const jessica2 = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
//   family: ["Alice", "Bob"],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = "Davis";

// jessicaCopy.family.push("Mary");
// jessicaCopy.family.push("John");

// console.log("Before marriage:", jessica2);
// console.log("After marriage: ", jessicaCopy);

const kisi1 = {
  ad: "elif",
  soyad: "tartar",
  age: 29,
  childs: ["Irem, Gizem"],
};

const kisi1_copy = kisi1;
kisi1_copy.ad = "Ceren";
kisi1_copy.soyad = "Gözcü";

console.log(kisi1);
console.log(kisi1_copy);

const personel1 = {
  ad: "kazım",
  soyad: "karka",
};

const personel1_copy = Object.assign({}, personel1);
personel1_copy.ad = "Nazım";
personel1_copy.soyad = "Koyuncu";

console.log(personel1);
console.log(personel1_copy);
