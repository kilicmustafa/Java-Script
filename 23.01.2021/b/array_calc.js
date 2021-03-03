function calcAvarge(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  let avarage = total / array.length;
  return avarage;
}

const calculate = calcAvarge([10, 15, 20]);
console.log(calculate);
