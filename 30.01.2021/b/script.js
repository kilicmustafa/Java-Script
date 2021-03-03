const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const demet = {};

for (const goal of Object.values(game.scored)) {
  demet[goal] ? demet[goal]++ : (demet[goal] = 1);
}
console.log(demet);

for (const [index, playname] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(index) + 1} , ${playname}`);
}

let avarage2 = 0;
let c = 0;
for (const value of Object.values(game.odds)) {
  avarage2 += value;
  c++;

  if (c == 3) {
    console.log("Avarage : ", avarage2 / 3);
  }
}

for (const [id, odd] of Object.entries(game.odds)) {
  let teamStr = id == "x" ? "draw" : `victory ${game[id]};`;
  console.log(teamStr, odd);
}
// 1.
for (const [index, playerName] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(index) + 1} ${playerName}`);
}

// 2.
let avarage = 0;
let b = 0;
for (const [index, a] of Object.entries(game.odds)) {
  avarage += a;
  console.log(avarage);
  console.log(index);
  b++;
  if (b == 3) {
    avarage = avarage / 3;
    console.log(avarage);
  }
}

// 3.
for (const [id, odd] of Object.entries(game.odds)) {
  const teamStr = id === "x" ? "draw" : `victory ${game[id]}`;

  console.log(`Odd of ${teamStr} : ${odd}`);
}

scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
