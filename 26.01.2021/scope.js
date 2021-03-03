// not: var değişkeni intenilen yerde kullanılır ve yeniden tanımlanabilir. Ama let ve const tanımlanan yerdediğer değişken önceki satırda bile olsa kullanılamaz
// not : let ve const koşul dışında kulanılmaz iken var değişken tipi kullanılır

var names = "mustafa";

if (1 < 2) {
  let names = "new name";
  console.log(names);
}

console.log(names);

// class Kullanici {
//   yazdir() {
//     console.log(this);
//   }
// }

// var kullanici = new Kullanici();

// kullanici.yazdir();

// console.log(this);

// secret function

// var Modul = function () {
//   function _secretFunction() {
//     console.log("This area is forbidden");
//   }
//   function openFunction() {
//     console.log("Hello everyone");
//   }
//   return {
//     gizli: _secretFunction,
//     acik: openFunction,
//   };
// };

// let prosses = Modul();

// prosses.gizli();
// prosses.acik();

/// hosting yapıları

// garip bişey olarak var ile oluşturulan değerleri undefined olarak gösteriyor

// console.log(nameThree);

// const names = "Mert";
// let nameTwo = "Emre";
// var nameThree = "Kerim";

// console.log(firstFunc());
// console.log(thirthFunc);

// function firstFunc() {
//   return "First";
// }

// var secondFunc = function () {
//   return "second";
// };

// const thirthFunc = () => {
//   return "thirth";
// };
