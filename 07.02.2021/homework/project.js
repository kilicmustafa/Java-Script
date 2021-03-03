// function kullaniciOlustur() {
//   return {
//     isim: "İhsan",
//     ref() {
//       return this;
//     },
//   };
// }

// let kullanici = kullaniciOlustur();
// alert(kullanici.ref().isim);

// let hesapMakinesi = {
//   a: undefined,
//   b: undefined,
//   oku() {
//     this.a = Number(prompt("VALUE 1", 10));
//     this.b = Number(prompt("VALUE 2", 20));
//   },
//   topla() {
//     return this.a + this.b;
//   },
//   carp() {
//     return this.a * this.b;
//   },
// };

// hesapMakinesi.oku();
// alert(hesapMakinesi.carp());
// alert(hesapMakinesi.topla());

// let merdiven = {
//   adim: 0,
//   yukari() {
//     this.adim++;
//     return this;
//   },
//   assagi() {
//     this.adim--;
//     return this;
//   },
//   adimlariGoster() {
//     alert(this.adim);
//   },
// };

// merdiven.yukari().yukari().assagi().adimlariGoster();

// let kullanici = {
//   isim: "İhsan",
//   para: 1000,

//   [Symbol.toPrimitive](hint) {
//     alert(`ipucu: ${hint}`);
//     return hint == "string" ? `{isim: "${this.isim}"}` : this.para;
//   },
// };

// // demo
// alert(kullanici); // ipucu: string -> {isim: "İhsan"}
// alert(+kullanici); // ipucu: number -> 1000
// alert(kullanici + 500); // ipucu: default -> 1500

// function HesapMakinesi() {
//   this.oku = function () {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   };

//   this.topla = function () {
//     return this.a + this.b;
//   };

//   this.carp = function () {
//     return this.a * this.b;
//   };
// }

// let hesapMakinesi = new HesapMakinesi();
// hesapMakinesi.oku();

// alert("Toplam=" + hesapMakinesi.topla());
// alert("Carpım=" + hesapMakinesi.carp());

////-----

// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// function randomExact(min, max) {
//   return Math.trunc(min + Math.random() * (max - min));
// }

// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));

// function randomExact(min, max) {
//   return Math.trunc(min + Math.random() * (max - min));
// }

// /// ---------------

// function randomInteger(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);

//   return Math.floor(rand);
// }

// alert(randomInteger(1, 3));

/////--------------------------//////////////--------------------
// function sumInput() {
//   let sayilar = [];

//   for (let i = 0; i < 10; i++) {
//     let prm = +prompt("Lütfen bir değer girin ... ");
//     sayilar.push(prm);
//     if (prm === "" || !isFinite(prm || prm === null)) {
//       break;
//     }
//   }

//   let toplam = 0;

//   for (let sayi of sayilar) {
//     toplam += sayi;
//   }

//   return toplam;
// }

// alert(sumInput());

//////-----------------------------///////////////--------------------

// let str = "test";
// let arr = ["t", "e", "s", "t"];

// alert(str.slice(1, 3));

// alert(str.slice(-1));

// /// ----------------------/////////////----------------------------

// let arr2 = ["eve", "gitmek", "istiyorum"];
// arr2.splice(1, 1);
// alert(arr2);

// let arr = [1, 2];

// let arrayLike = {
//   0: "başka",
//   1: "birşey",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
// };

///------------------////////////////---------------
[1, -2, 15, 2, 0, 8].sort(function (a, b) {
  console.log(a + " <> " + b);
});
