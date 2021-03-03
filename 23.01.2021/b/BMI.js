per1 = {
  name: "Marks",
  weight: 78,
  tall: 1.69,
};

per2 = {
  name: "John",
  weight: 92,
  tall: 1.95,
};

console.log(78 / 1.69 ** 2);

function calcBMI(weight, tall) {
  return weight / tall ** 2;
}

function calcPer(perList) {
  let bmi = [];

  for (let i = 0; i < perList.length; i++) {
    bmi.push(calcBMI(perList[i].weight, perList[i].tall));
    console.log(`${perList[i].name} and bmi : ${bmi}`);
  }
  let index = 0;

  let maxBmi = bmi[0];
  for (let i = 0; i < bmi.length; i++) {
    if (bmi[i] > maxBmi) {
      index = i;
    }
  }

  console.log(
    `The Highest BMI has person is ${perList[index].name} bmi : ${bmi[index]}`
  );
}

calcPer([per1, per2]);
