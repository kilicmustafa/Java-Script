// // // gotcha if there's no let

// // let title, width, height;

// // ({ title, width, height } = { title: "Litte Prince ", width: 30, height: 50 });

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ["Cake", "Donut"],
//   extra: true, // something extra that we will not destruct
// };

// let { size } = options;
// console.log(size);

// //// Homework1

let kullanici = {
  adi: "Ahmet",
  yasi: 30,
};

let { adi: isim, yasi: yili, adminMi = false } = kullanici; // bak

console.log(adminMi);

// let maaslar = {
//   Ahmet: 100,
//   Mehmet: 300,
//   Muzaffer: 250,
//   Okan: 300,
// };

// function azamiMaaslar(obj) {
//   let maxMaas = 0;
//   let maxNames = [];
//   for (let [kisi, maas] of Object.entries(obj)) {
//     if (maas >= maxMaas) {
//       maxMaas = maas;
//     }
//   }

//   for (let [kisi, maas] of Object.entries(obj)) {
//     if (maxMaas === maas) {
//       maxNames.push(kisi);
//     }
//   }

//   return maxNames;
// }

// console.log(azamiMaaslar(maaslar));
