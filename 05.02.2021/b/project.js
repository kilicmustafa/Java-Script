// const greet = function (message) {
//   return function (name) {
//     console.log(`${message} ${name}`);
//   }
// };

// const greet_2 = (greeting) => {
//   return (name) => console.log(`${greeting} ${name}`);
// };

// greet_2("How is it going everything ? ")("Mustafa");

const greet_3 = (greetting) => (name) => console.log(`${greetting} ${name}`);

greet_3("hi")("Mustafa");

const greet_4 = (greetting) => (name) => console.log(`${greetting} ${name}`);

const greet = function (message) {
  return function (name) {
    console.log(`${message} ${name}`);
  };
};

const greet2 = (message) => {
  return (name) => {
    console.log(`${message} ${name}`);
  };
};

const greet3 = (message) => (name) => console.log(`${message} ${name}`);

greet_3("How's it going everything ")("Mustafa");
