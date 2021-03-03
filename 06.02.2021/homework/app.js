user = {
  name: "john",
  surname: "smith",
};

user.name = "pete";

delete user.name;

// question two

function isEmpty(object) {
  let a = true;
  for (content in object) {
    a = false;
  }
  return a;
}

function isEmpty2(object) {
  for (i in object) {
    return false;
  }
  return true;
}

function isEmpty3(object) {
  for (i in object) {
    return false;
  }
  return true;
}

let schedule = {};
alert(isEmpty2(schedule));

schedule["8:30"] = "Wake Up";

alert(isEmpty2(schedule));

function calculateTotalSalary(obj) {
  let total = 0;
  for (key in obj) {
    total += Number(obj[key]);
  }
  if (total !== 0) {
    return total;
  }
  return false;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log(calculateTotalSalary(salaries));

function totalSalary(obj) {
  let total = 0;
  for (index in obj) {
    total += Number(obj[index]);
  }
  if (total !== 0) {
    return total;
  }
  return false;
}
// question 3

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

console.log(typeof menu.width);

function multiplyNumeric(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }

  console.log(obj);
}

function twiceNumber(obj) {
  for (index in obj) {
    if (typeof obj[index] === "number") {
      obj[index] *= 2;
    }
  }

  console.log(obj);
}

multiplyNumeric(menu);
