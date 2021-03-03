const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Maps : Iteration

const question = new Map([
  ["question", "What is the best programing language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try Again!"],
]);

question.forEach(function (value, key) {
  console.log(key, " = ", value);
});

const array = Array.from(question);
console.log(array);

// for (const [value, key] of Object.values(question)) {
//   if (typeof value == "number") console.log(`Answer ${value} : ${key}`);
// }

// const answer = Number(prompt("Please give me your sugess"));
// console.log(question.get(answer == question.get("correct")));

// console.log(question);
// console.log(question.get("question"));

// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
