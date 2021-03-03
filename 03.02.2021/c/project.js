const bookings = [];

const planeBooking = function (flightNumber = 1, pasingerId, price = 200) {
  // flightNumber = flightNumber || 1;
  // price = price || 200;

  booking = {
    flightNumber,
    pasingerId,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

planeBooking(undefined, 100, undefined);
planeBooking(2, 201, 254);
planeBooking(3, 203, 222);




