let ahmet = {
  adi: "Ahmet",
  yas: 25,
};

let mehmet = {
  adi: "Mehmet",
  yas: 30,
};
let muzaffer = {
  adi: "Muzaffer",
  yas: 28,
};

let kullanici = [ahmet, mehmet, muzaffer];

let isimler = kullanici.map((obj) => obj.adi).join(", ");

alert(isimler);

//// --------------- Map

let ahmet = { adi: "Ahmet", soyadi: "Doğtaş", id: 1 };
let mehmet = { adi: "Mehmet", soyadi: "İstikbal", id: 2 };
let muzaffer = { adi: "Muzaffer", soyadi: "Bellona", id: 3 };

let kullanicilar = [ahmet, mehmet, muzaffer];

let kullaniciMapped = kullanicilar.map((person) => ({
  adi_soyadi: `${person.adi} ${person.soyadi}`,
  id: person.id,
}));

// 1
alert(kullaniciMapped[0].adi_soyadi); // Ahmet Doğtaş
