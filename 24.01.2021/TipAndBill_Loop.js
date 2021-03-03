function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [50, 180, 20, 40, 50, 59, 22, 29, 99, 100, 101];
const tips = [];
const totals = [];

let i = 0;
while (i < 10) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
  i++;
}

totals.forEach((total) => {
  console.log(total);
});

