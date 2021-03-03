// --- Array sıralama Metodu
function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [1, 29, 2, 8, 5, 9];

//arr.sort(compare); // aşşağıdaki kodda aynı işlemi görür

// arr.sort(function (a, b) {
//   return a - b;
// });

//---- aynı fonksiyonu ok ile kullanmak
arr.sort((a, b) => a - b);

//alert(arr);

/// ------------- Arrayin sıralamasını tersine çevirmek

arr.reverse();

//alert(arr);

//// --------------- String parçalayıp arraye dönüştürme
// let isimler = "Haluk, Merve, Fatma";

// let arr2 = isimler.split(", ");

// for (let isim of arr2) {
//   alert(`${isim}'e mesaj `);
// }

/// ------- eğer spliti boş çağırırsanın stringi harflere böler

let str = "Sevim";
// alert(str.split(""));

/// Reduce fonksionu ile array toplama ve çarpma

let arr3 = [1, 2, 3];

let result = arr3.reduce((sum, current) => sum * current, 1);
// alert(result);

// ["Bilbo", "Friends", "Nazgul"].forEach(alert);

// ["Bilbo", "Friens", "Nazgul"].forEach((item, index, array) => {
//   alert(`${item} ${array}'in ${index}. indexinde`);
// });

let kullanici = {
  yas: 18,
  dahaGenc(digerKullanici) {
    return digerKullanici.yas < this.yas;
  },
};

let kullanicilar = [{ yas: 12 }, { yas: 16 }, { yas: 32 }];

let dahaGencKullanicilar = kullanicilar.filter(kullanici.dahaGenc, kullanici);

alert(dahaGencKullanicilar.length);

// how is work the filter

const words = ["M", "U", "S", "T", "A", "Fa", "A"];

const rusult = words.filter((word) => word.length >= 2);

function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 11, 5, 7, 8, 13].filter(isBigEnough);
