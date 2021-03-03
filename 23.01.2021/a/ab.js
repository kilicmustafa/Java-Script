const calculateTemp = function (tempArray) {
  let max = tempArray[0];
  let min = tempArray[0];

  for (let i = 0; i < tempArray.length; i++) {
    const currentTemp = tempArray[i];
    if (currentTemp > max) max = currentTemp;

    if (currentTemp < min) min = currentTemp;
  }

  console.log("Max value : ", max);
  console.log("Min value : ", min);
};

calculateTemp([2, 33, 7]);



