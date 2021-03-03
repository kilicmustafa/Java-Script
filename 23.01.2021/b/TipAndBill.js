/*

Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
GOOD LUCK �

 */

function calcTip(bill) {
  let tip;
  if (bill > 50 && bill < 300) {
    tip = (bill * 15) / 100;
  } else if (bill >= 300) {
    tip = (bill * 20) / 100;
  } else {
    tip = 0;
  }

  return tip;
}

let bills = [51, 301, 300, 40, 90, 400];

let tips = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}

tips.forEach((a) => {
  console.log(a);
});

// another Solve

const callTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [31, 301, 90];
const tips = [callTip(bills[0]), callTip(bills[1]), callTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1]];

console.log(bills, tips, total);

const callTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : 0.2;
};

const bill = [10, 100, 250, 300, 500];
const tip = [callTip(bill[0], bill[1], bill[2])];
const total = [bill[0] + tip[0], bill[1] + tip[1]];

console.log(bills, tips, total);
