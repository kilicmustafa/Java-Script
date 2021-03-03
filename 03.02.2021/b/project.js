const flights = `Delayed_Deperature;foa9376109;tx4651231643;11:25
+_Arrival;foa9376109;tx4651231643;11:45
+_Delayed_Arrival;foa9376109;tx4651231643;12:05
+_Deperature;foa9376109;tx4651231643;12:30`;

const rows = flights.split("+");

for (const [i, row] of rows.entries()) {
  let informations = row.trim("_").split(";");
  let statuion = informations[0].split("_").join(" ");
  console.log(
    `${statuion} from ${informations[1]
      .slice(0, 3)
      .toUpperCase()} to ${informations[2]
      .slice(0, 3)
      .toUpperCase()}  ${informations[3].replace(":", "h")}`.padStart(41, "-")
  );
}

const bykHarf = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🩸" : ""}${type.replaceAll(
    "_",
    " "
  )} ${bykHarf(from)} ${bykHarf(to)} ${time.replace(":", "h")}`.padStart(
    "36",
    " "
  );
  console.log(output);
}
