// ---
function printForecasted(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`today ${i + 1} : ${arr[i]}°c`);
  }
}

printForecasted([10, 23, -5]);

// ----
const arr2 = [20, 30, 40];

function checkValue(val) {
  return val >= 30;
}
console.log(arr2.findIndex(checkValue)); // 30'dan büyük olan değerin ilk indexini verir

//
const degrees_1 = [10, 20, 30];
const degress_2 = [5, -5, 10];

function printForecasted2(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in today ${i + 1}....  `;
  }

  console.log(str);
}

printForecasted2(degrees_1);


