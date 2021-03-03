/*

Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK �

*/ 

const puanHesaplama = (yt, kt) => {
  yOrt = (yt[0] + yt[1] + yt[2]) / 3;

  kOrt = (kt[0] + kt[1] + kt[2]) / 3;

  return { y: yOrt, k: kOrt };
};

function kazananKontrol(yOrt, kOrt) {
  if (yOrt * 2 >= kOrt) {
    console.log(`Yunuslar kazandı (${yOrt} karşı ${kOrt})`);
  } else if (yOrt * 2 <= kOrt) {
    console.log(kOrt, yOrt);
    console.log(`Koalaslar kazadı (${kOrt} karşı ${yOrt})`);
  } else {
    console.log("Kimse Kazanamadı");
  }
}

let sonuc1 = puanHesaplama([44, 23, 71], [65, 54, 49]);
let sonuc2 = puanHesaplama([85, 54, 41], [23, 34, 27]);

kazananKontrol(sonuc1.y, sonuc1.k);
kazananKontrol(sonuc2.y, sonuc2.k);

// Alternative Solve

const calcAvarage = (a, b, c) => (a + b + c) / 3;
console.log(calcAvarage(4, 5, 9));

const scoreDolpings = calcAvarage(44, 23, 71);
const scoreKoalas = calcAvarage(65, 54, 49);
console.log(scoreDolpings, scoreKoalas);

const checkWinner = function (avgDolpings, avgKoalas) {
  if (avgDolpings * 2 >= avgKoalas) {
    console.log(`Dolpings team winner🏆(${avgDolpings} vs ${avgKoalas})`);
  } else if (avgKoalas * 2 <= avgKaolas) {
    console.log(`Koalas team winner🏆(${avgKoalas} vs ${avgDolpings}) `);
  } else {
    console.log("No team winner");
  }
};

checkWinner(scoreDolpings, scoreKoalas);
