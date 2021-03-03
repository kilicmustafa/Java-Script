// function printNumbers(from, to) {
//   let i = from;
//   let interval1 = setInterval(() => {
//     console.log(i);
//     i++;
//     if (i === to) {
//       clearInterval(interval1);
//     }
//   }, 1000);
// }

// printNumbers(10, 30);

// function printNumberSetTimeOut(from, to) {
//   let i = from;
//   setTimeout(function timeout() {
//     console.log(i);
//     i++;
//     if (i < to) {
//       setTimeout(timeout, 1000);
//     }
//   }, 1000);
// }

// printNumberSetTimeOut(50, 55);

// let i = 0;

// let start = Date.now();

// let timer = setInterval(func, 0);

// function func() {
//   for (j = 0; j < 16; j++) {
//     i++;
//   }

//   if (i === 16) {
//     console.log(Date.now() - start);
//     clearInterval(timer);
//   }
// }

let i = 0;

setTimeout(() => console.log("Mustafa", i), 100);

for (j = 0; j < 1e5; j++) {
  i++;
}

function say(time, phrase) {
  alert(time + this.name + phrase);
}

let user = { name: "Pelin " };

let arg = ["10:00", "İyi geceler"];
say.call(user, ...arg);

say.apply(user, arg);
