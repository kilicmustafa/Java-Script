let fiyatlar = Object.fromEntries([
  ["Muz", 1],
  ["Armut", 9],
  ["Ayva", 3],
]);

alert(fiyatlar.Muz);

// farklı obje oluşturarak fiyat yükseltme

let fiyatlar = {
  muz: 1,
  portakal: 2,
  et: 4,
};

let ikiKatiFiyatlar = {};

for (let [product, price] of Object.entries(fiyatlar)) {
  ikiKatiFiyatlar[product] = price * 2;
}

alert.ikiKatiFiyatlar(et);

// you could solve this different way

let fiyatlar = {
  muz: 1,
  portakal: 2,
  et: 4,
};

let ikiKatiFiyatlar = Object.fromEntries(
  Object.entries(fiyatlar).map(([key, value]) => [key, value * 2])
);

let ikiKatiFiyatlar = Object.fromEntries(
  Object.entries(fiyatlar).map(([key, value]) => [key, value * 2])
);
alert(ikiKatiFiyatlar);

/// Maptan alma
let map = new Map();
map.set("Muz", 1);
map.set("Portakal", 2);
map.set("Kivi", 3);

let obj = Object.fromEntries(map);

let map2 = new Map();
map.set("Muz", 1);
map.set("Armut", 2);
map.set("Kivi", 3);

let obj2 = Object.fromEntries(map2);
