// function selamVer() {
//   alert(terim); // undefined

//   var terim = "Merhaba";
// }
// selamVer();

// function selamVer() {
//   terim = "Merhaba";

//   if (false) {
//     var terim;
//   }

//   console.log(terim);
// }

// selamVer();

// function selamVer() {
//   alert(terim);

//   var terim = "Merhaba";
// }

// selamVer();

/// kendi özelliğini eklemek

// function selamVer() {
//   alert("Selam");

//   selamVer.counter++;
// }

// selamVer.counter = 0;

// selamVer();
// selamVer();

// alert(`selamVer = ${selamVer.counter}`);

// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   }

//   counter.count = 0;

//   return counter;
// }

// let counter = makeCounter();

// alert(counter());
// alert(counter());

// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   }

//   counter.count = 0;

//   counter.set = function (deger) {
//     counter.count = deger;
//   };

//   counter.azalt = function () {
//     counter.count--;
//   };
//   return counter;
// }

// let counter = makeCounter();

// counter.count = 10;

// counter.azalt();

// counter.set(11);

// console.log(counter());

function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  counter.change = (deger) => (counter.count = deger);

  counter.decreasing = () => counter.count--;

  return counter;
}

let counter = makeCounter();

counter();
counter();
counter();
console.log(counter());

counter.change(5);
console.log(counter());

counter.decreasing();
counter.decreasing();

counter.decreasing();

console.log(counter());

function topla(a) {
  let anlikToplam = a;

  function f(b) {
    anlikToplam += b;

    return f;
  }

  f.toString = function () {
    return anlikToplam;
  };

  return f;
} /// yukardaki kodun manasi ne idi bak // topla(1)(2)().... gibi istediğimiz kadar argümanı toplar;

function topla(a) {
  anlikTopla = a;

  function f(b) {
    anlikTopla += b;
    return f;
  }

  f.toString = function () {
    return anlikTopla;
  };
}

function makeCounter() {
  function counter() {
    counter.count++;
  }

  counter.count = 0;

  counter.set = (deger) => (counter.cound = deger);

  counter.decreasing = () => counter.count--;

  return counter;
}

let counter = MakeCounter();

counter();

counter.set(11);



