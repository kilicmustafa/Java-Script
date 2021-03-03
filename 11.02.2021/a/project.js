// let isim = "Kajin";

// function selamVer() {
//   alert("Merhaba " + isim);
// }

// isim = "Bozkurt";

// selamVer();

// function selamVer() {
//   let isim = "Kamil";
//   return function () {
//     alert(isim);
//   };

// }

// let isim = "Koç"

// let is = selamVer()

// function Kullanici(isim) {
//   // obje metodu iç içe fonksiyon olarak yaratıldı.
//   this.Kullanici = function () {
//     alert(isim);
//   };
// }

// let kullanici = new Kullanici("Ahmet");
// kullanici.Kullanici();

let deger = "Sürpriz!";

function f() {
  let deger = "En yakın değer";

  function g() {
    console.log(deger); // in console: type alert( value ); Surprise!
  }

  return g;
}

let g = f();
g();

// function topla(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// function arasinda(a, b) {
//   return;
// }

// function arasinda(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert(arr.filter(arasinda));

// function arasinda(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }

// function diziInclude(dizi) {
//   return function (x) {
//     dizi.includes(x);
//   };
// }

// function diziInclude(dizi) {
//   return (x) => dizi.includes(x);
// }

// function diziArasinda(a, b) {
//   return (x) => x >= a && x <= b;
// }

// function diziArasinda(a, b) {
//   return (x) => x >= a && x <= b;
// }

// let kullanicilar = [
//   { ad: "Ahmet", yas: 20, soyad: "Zurnacı" },
//   { ad: "Hideo", yas: 18, soyad: "Konami" },
//   { ad: "Jane", yas: 19, soyad: "Hathaway" },
// ];

// function alanIle(alanAdi) {
//   return (a, b) => (a[alanAdi] > b[alanAdi] ? 1 : -1);
// }

// kullanicilar.sort(alanIle("ad"));
// kullanicilar.forEach((kullanici) => alert(kullanici.ad)); // Ahmet, Hideo, Jane

// kullanicilar.sort(alanIle("yas"));
// kullanicilar.forEach((kullanici) => alert(kullanici.ad)); // Hideo, Jane, Ahmet

// List < string > list = new List[("Ahmet", "Ozan", "Eda", "Ahu")]();

// for (let i = 0; i < list.length; i++) {
//   list.Remove(list[i]);
// }

// console.log(string.Join(",", list));

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// function arasinda(a, b) {
//   return (x) => x <= a && x >= b;
// }

// function diziIcinde(arr) {
//   return (x) => arr.include(x);
// }

// function alanIle(alan) {
//   return (a, b) => (a[alan] > b[alan] ? 1 : -1);
// }

// function orduYap() {
//   let nisancilar = [];

//   for (let i = 0; i < 10; i++) {
//     let nisanci = function () {
//       alert(i);
//     };

//     nisancilar.push(nisanci);
//   }

//   return nisancilar;
// }
