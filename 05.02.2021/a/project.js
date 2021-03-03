const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const firstWordBig = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Orginal string ${str}`);
  console.log(`Trasformed String ${fn(str)}`);
  console.log(`Trasformed by ${fn.name}`);
};

transformer("That sentence need to replace", oneWord);
transformer("İt's not hard to make that much ", firstWordBig);

const oneWord = function (str) {
  return str.replace(" ", "").toLowerCase();
};

const firstUpper = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

const firstSpeelUpper = function (str) {
  const words = str.split(" ");

  for (index in words) {
    words[index] = words[index].replace(
      words[index][0],
      words[index].toUpperCase()
    );
  }
  return words.join(" ");
};

const transformer = function (str, fn) {
  console.log(`Orginal string ${str}`);
  console.log(`Transformed String ${fn(str)}`);
  console.log(`Trasformed by ${fn.name}`);
};
