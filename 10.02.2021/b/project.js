// function topla(n) {
//   if (n == 1) return 1;

//   // n > 1
//   return n + topla(n - 1);
// }

// console.log(topla(100));

// n = 100;
// let totalN = 0;
// for (let i = n; i >= 0; i--) {
//   totalN += i;
// }
// console.log(totalN);

// function tolaAritmetic(n) {
//   return (n * (n + 1)) / 2;
// }

// /// Question 2 Faktoriyel hesaplama

// function factoriel(n) {
//   let fak = 1;
//   if (n > 1) {
//     fak = n * factoriel(n - 1);
//   }
//   return fak;
// }

// alert(factoriel(6));

// ///////////////////////////////////////////
// function faktoriyel(n) {
//   return n != 1 ? n * faktoriyel(n - 1) : 1;
// }

// alert(faktoriyel(5)); // 120
// ////////////////////
// function faktoriyel(n) {
//   return n ? n * faktoriyel(n - 1) : 1;
// }

// alert(faktoriyel(5)); // 120

//// fibonacci hesaplama

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(7));

// function fib2(n) {
//   let a = 1;
//   let b = 1;

//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
// }
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

// let list = {
//   deger: 1,
//   sonraki: {
//     deger: 2,
//     sonraki: {
//       deger: 3,
//       sonraki: {
//         deger: 4,
//         sonraki: null,
//       },
//     },
//   },
// };
// // Tek bağlı
// function listeYaz(list) {
//   // döngü tabanlı

//   let tmp = list;

//   while (tmp) {
//     alert(tmp.deger);
//     tmp = tmp.sonraki;
//   }

//   // another methopore

// }
// function listeYaz(list) {
//   alert(list.deger);

//   if (list.sonraki) {
//     listeYaz(list.sonraki);
//   }
// }
