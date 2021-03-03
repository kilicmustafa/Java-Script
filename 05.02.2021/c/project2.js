const turkHavaYolları = {
  airline: "Türk Hava Yolları",
  iataCode: "THY",
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} boked a seat on ${this.airline} flight ${this.iataCode} ${flightNum} `
    );

    this.bookings.push({ flight: `${this.iataCode} ${flightNum} `, name });
  },
};

turkHavaYolları.book("1453", "Mustafa KILIÇ");
turkHavaYolları.book("1071", "Metehan");

const pegasus = {
  airline: "Pegasus",
  iataCode: "PGS",
  bookings: [],
};

const book = turkHavaYolları.book;

book.call(pegasus, 666, "Muhammed");

const onurAir = {
  airline: "OnurAir",
  iataCode: "OAİR",
  bookings: [],
};

book.apply(onurAir, [555, "Abdulrezzak"]); // apply fonksiyonuna array ile gönderme yapmaz isen çalışmaz

const fligData = [333, "Niseten"];
book.apply(onurAir, fligData);

const bookTHY = book.bind(turkHavaYolları);
const bookPGS = book.bind(pegasus);
const bookOAİR = book.bind(onurAir);

bookTHY(23, "Steven Wiliams");
bookPGS(25, "Mert Küllük");

turkHavaYolları.planes = 300;
turkHavaYolları.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector("body")
  .addEventListener("click", turkHavaYolları.buyPlane.bind(turkHavaYolları));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(80));
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(300));
console.log(addVAT2(400));
