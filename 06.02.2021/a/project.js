const person = {
  number3: 10,
  number4: 20,
};

function arbitrary_function(number1, number2) {
  console.log(number1 + number2 + this.number3 + this.number4);
}

arbitrary_function(15, 15); // NaN  we take the NaN value cuz our this object isn't global object.
arbitrary_function.call(person, 15, 20);
arbitrary_function.apply(person, [30, 40]); //We send the our argumans in a array cuz the rules is such it

const person2 = {
  number3: 3,
  number4: 1,
};

function arbitrary_function2(number1, number2) {
  console.log(number1 * number2 * this.number3 * this.number4);
}

arbitrary_function2.call(person2, 1, 1);
arbitrary_function2.apply(person2, [4, 1]);

const copyFunc1 = arbitrary_function2.bind(person2, 1, 2);
copyFunc1(1, 2);
