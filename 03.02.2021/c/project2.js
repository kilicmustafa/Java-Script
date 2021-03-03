let flight = "FLY24THY";
person = {
  name: "Mustafa",
  passportNo: 12345789101,
};

const checkIn = function (flghtNo, passenger) {
  flghtNo = "FLY34PHS";

  passenger.name = "Mr." + passenger.name;

  if (passenger.passportNo === 12345789101) {
    console.log(" Have an nice trip  ");
  } else {
    console.log("wrong passport");
  }
};

checkIn(flight, person);

console.log(flight);
console.log(person);

const newPassport = function (person) {
  person.passportNo = Math.trunc(Math.random() * 100000000000);
};

newPassport(person);
checkIn(flight, person);
console.log(person);
