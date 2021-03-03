// setTimeout(function () {
//   console.log("3 sn sonra çalıştı");
// }, 3000);

// let func = function (a, b) {
//   console.log("a + b : ", a + b);
// };

// setTimeout(func, 2000, 35, 38);

// // clearTimeOut

// let setTimeId = setTimeout(() => {
//   console.log("Time out temizlenmedi");
// }, 3000);

// clearTimeout(setTimeId);

// setTimeId;

// // setInterval()

// let intervalId = setInterval(() => {
//   console.log("2 Saniye oldu");
// }, 2000);

// setInterval(() => {
//   clearInterval(intervalId);
//   console.log("Temizleme başarılı");
// }, 5000);

// let timeId = setTimeout(function tekrar() {
//   alert("Nick");

//   timeId = setTimeout(tekrar, 3000);
// }, 3000);

// timeId;

setTimeout(() => {
  console.log("AAAA");
});

console.log("BBBB");

let i = 0;

let start = Date.now();

function count() {
  for (let j = 0; j < 1e9; j++) {
    i++;
  }

  alert(Date.now - start, " ms de tamamlandı");
}
count();

/// iki parçaya bölme metodu

let i = 0;

let start = Date.now();

function count() {
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i === 1e9) {
    alert(Date.now() - start);
  } else {
    setTimeout(count, 0);
  }
}

count();

let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(start - Date.now());

  if (start + 100 > Date.now()) {
    alert(times.values());
  } else {
    setTimeout(run, 0);
  }
}, 0);
