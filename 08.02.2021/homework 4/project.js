let muzaffer = { adi: "Muzaffer", yas: 25 };
let mehmet = { adi: "Mehmet", yas: 30 };
let ahmet = { adi: "Ahmet", yas: 28 };

let arr = [muzaffer, mehmet, ahmet];

sortByName(arr);

// şimdi: [ahmet, mehmet, muzaffer]
alert(arr[2].adi); // Mehmet

function sortByName(arr) {
  arr.sort((a, b) => a.adi > b.adi);
}

//// --------- array shuffle

function shuffle(arr) {
  arr.sort((a, b) => a * Math.random() - b);
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);

shuffle(arr);
alert(arr);

shuffle(arr);
alert(arr);

let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 1000000; i++) {
  shuffle(arr);
  count[arr.join("")]++;
}

for (let key in count) {
  alert(`${key} : ${count[key]}`);
}
