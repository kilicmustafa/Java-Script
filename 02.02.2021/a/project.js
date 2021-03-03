// // String methods

const string = "Hava koşulları nedeni ile uçuşunuz iptal edilmiştir";

// console.log(string.slice(1, 3));

// console.log(string.substring(1, 3));

// console.log(string.indexOf("k"));
// console.log(string.lastIndexOf("a"));

// // başlangıc 0 geriye doğru 5 karakter alır
// console.log(string.slice(-5));

console.log(string.slice(1, -3));

// const checkSeatNumber = function (seatNo) {
//   const seatCode = seatNo.slice(-1);

//   if (seatCode == "B" || seatCode == "E") {
//     console.log("You are unlucky hahaha 🚑");
//   } else {
//     console.log("You are very luck 🛩");
//   }
// };

// checkSeatNumber("11B");
// checkSeatNumber("11C");

// console.log(new String("Mustafa"));
console.log(typeof new String("Mustafa2"));
console.log(typeof new String("Burak Ateş").slice(1));

// // E mail Normalization
// const constantEmail = "kilicmustafa.tr@gmail.com";
// const inputEmail = "     kiliCmustaFA.tr@gmail.COM      ";

// const fixEmail = function (mail) {
//   return mail.trim().toLowerCase();
// };

// if (constantEmail === fixEmail(inputEmail)) {
//   console.log("Mailler eşleşti");
// }

// // Para birimi değiştirme

// const para = "234,99£";
// console.log(para.replace(",", ".").replace("£", "$"));

// const personelAnnouncement =
//   "All passingers come to doarding door 23. Boarding door 23!";

// const capitalizeAnnounce =
//   personelAnnouncement[0].toUpperCase() + personelAnnouncement.slice(1);
// const newAnnounce = personelAnnouncement.trim().replace("door", "gate");
// const newAllAnnounce = personelAnnouncement.trim().replace(/door/g, "gate");

// console.log(newAnnounce);
// console.log(newAllAnnounce);

// const planeName = "Airbus A370neo";
// console.log(planeName.includes("370"));
// console.log(planeName.toLowerCase().startsWith("air"));

// if (planeName.startsWith("Air") && planeName.endsWith("neo")) {
//   console.log("Your flight delayed");
// } else {
//   console.log("You can get on the plane");
// }

// // Check Baggage

// const checkBaggage = function (items) {
//   items = items.trim().toLowerCase();
//   if (items.includes("knife") || items.includes("gun")) {
//     console.log("We're sory. You can't get on plane with  any harmful tools ");
//   } else {
//     console.log("You can get on the plane");
//   }
// };

// checkBaggage("I have a laptop ,snacks ,hamburger and gun ");
// checkBaggage("I have got a IPAD ,and a gun for protection myself");
// checkBaggage("I have a glove ,hat and scraf");

// split and join

// const nameString = "Mustafa Kılıç 1943";

// const nameArr = nameString.split(" ");
// console.log(nameArr);

// console.log(nameArr.join("+"));

// // Name capitalize

// const nameCapitalize = function (name) {
//   const names = name.split(" ");
//   const newNames = [];

//   for (n of names) {
//     newNames.push(n.replace(n[0], n[0].toUpperCase()));
//   }

//   // for (n of names) {
//   //   newNames.push(n[0].toUpperCase() + n.slice(1));
//   // }

//   console.log(newNames.join(" "));
// };

// nameCapitalize("ali kılıç");

// padding end start

const announce = "Lütfen 42. kapıya gidin";

console.log(announce.padStart(30, "*").padEnd(38, "*"));
console.log(announce.padStart(40, "-").padEnd(47, "-"));

const maskCreditCardNumber = function (number) {
  const str = number + "";
  last = str.slice(-4);

  return last.padStart(str.length, "*");
};

console.log(maskCreditCardNumber(12319857893120));
console.log("repeat*5 ".repeat(5));
