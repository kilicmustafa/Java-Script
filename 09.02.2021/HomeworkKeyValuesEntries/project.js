let maaslar = {
  Ahmet: 100,
  Mehmet: 300,
  Muzaffer: 700,
};

function toplamMaas(obj) {
  let toplam = 0;

  for (let value of Object.values(obj)) {
    toplam += value;
  }

  return toplam;
}

alert(toplamMaas(maaslar)); // 1100

// another methapor
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, current) => sum + current, 0);
}

/// features count

let kullanici = {
  adi: "Ahmet",
  yasi: 30,
};

function ozellikSayisi(obj) {
  return Object.values(obj).length;
}

alert(ozellikSayisi(kullanici)); // 2
