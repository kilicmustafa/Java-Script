let user = {
  name: "Mustafa",
  age: 19,
};

let key = prompt("What do you want to know about user?", "name");

// access by variable
alert(user[key]);
// alert(user.key) // it is give us a undefined value

// ---- Computet Properties // Hesaplanmış Özllikler -----

let fruit = prompt("Which fruit you to but", "apple");

const bag = {
  [fruit]: 5,
};

alert(bag[fruit]);

// -another method

let fruitN = prompt("Which fruit you to buy", "Orange");

const bags = {};
bags[fruitN] = 5;
alert(bags[fruitN]);

// more complex expressions
let fruit;
let bagss = {
  [fruit + "Computers"]: 5,
};


// ------- The property value sorthand -------------

