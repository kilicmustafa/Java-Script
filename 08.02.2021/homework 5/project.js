function ortalamaYasAl(arr) {
  let total = 0;
  arr.map((obj) => (total += obj.yas));
  total = total / arr.length;
  return total;
}

let muzaffer = { adi: "Muzaffer", yas: 25 };
let mehmet = { adi: "Mehmet", yas: 30 };
let ahmet = { adi: "Ahmet", yas: 29 };

let arr = [muzaffer, mehmet, ahmet];
alert(ortalamaYasAl(arr));

// hocamnın çözümü
function OrtalamaYasAl(arr) {
  return (
    arr.reduce((onceki, kullanici) => onceki + kullanici.yas, 0) / arr.length
  );
}

/////////------------------ ///////////////

function benzersiz(arr) {
  return new Set(arr);
}

let kullanicilar = [
  "Emine",
  "Muzaffer",
  "Fatma",
  "Kanako",
  "Kanako",
  "Muzaffer",
  "Fatma",
  "Kanako",
  ":-O",
];

console.log(benzersiz(kullanicilar)); // Emine, Muzaffer, Fatma, Kanako, :-O

///---------Hocanın çözümü

function benzersiz(arr) {
  let sonuc = [];

  for (let str of arr) {
    if (!sonuc.includes(str)) {
      sonuc.push(str);
    }
  }
  return sonuc;
}

alert(benzersiz(kullanicilar)); // Emine, Muzaffer, Fatma, Kanako, :-O
