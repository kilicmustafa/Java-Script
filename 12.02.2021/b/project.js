// let i = 0;

// let start = Date.now();

// function count() {
//   // yoğun bir iş
//   for (let j = 0; j < 1e9; j++) {
//     i++;
//   }

//   alert(Date.now() - start + "ms de tamamlandı");
// }

// count();

// function printNumbers(from, to) {
//   for (let i = from; i < to; i++) {
//     console.log(i);
//   }
// }

// setTimeout(printNumbers, 1000, 3, 33);

// // clearTimeOut
// let timerID = setTimeout(function () {
//   console.log("2 sn ");
// }, 2000);

// clearTimeout(timerID);
// alert(timerID);

setTimeID = setTimeout(function () {
  console.log("birşey");
}, 3000);

clearTimeout(setTimeID);

console.log(setTimeID);

let timerId = SetInterval(() => alert("tick"), 2000);

setTimeout() => {}
