let kullanici = {
  isim: "İhsan",
  yas: 30,

  selamVer() {
    alert(this.isim); // hataya neden olur
  },
};

let yonetici = kullanici;
kullanici = null;
//kullanici.selamVer();
yonetici.selamVer();

/// ----
kullanici = {
  isim: "Musta",
};
let kullanici2 = {
  isim: "Fafaya",
};

function selemVer() {
  alert(this.isim);
}

kullanici.f = selemVer;
kullanici2.f = selemVer;

kullanici.f();
kullanici2["f"]();
