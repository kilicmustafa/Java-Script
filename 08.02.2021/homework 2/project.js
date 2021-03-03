///-- ----- KENDİ Çözümüm

function Calculator(str) {
  if (str.indexOf("+") > -1) {
    let toplamArr = str.split("+");
    let toplam = 0;
    for (index in toplamArr) {
      toplam += Number(toplamArr[index].trim());
    }

    return toplam;
  }

  if (str.indexOf("-") > -1) {
    let cikarmaArr = str.split("-");
    let cikarma = Number(cikarmaArr[0].trim());

    for (index in cikarmaArr) {
      if (index == 0) {
        let b;
      } else {
        cikarma -= Number(cikarmaArr[index].trim());
      }
    }

    return cikarma;
  }
}

alert(Calculator("9 + 2 + 5"));
alert(Calculator("3 -  9  - 5"));

/// Hocanın çözümü yarın bunu kendin yapmaya çalış Yarın oldu deniyeceğim

function Calculator() {
  let methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    methods[name] = func;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result);

function Calculator() {
  let methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),

    (a = +split[0]), (op = split[1]), (b = +split[2]);

    if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return methods[op](a, b);
  };

  this.addMethod = function (name, fn) {
    methods[name] = fn;
  };
}

let powerCalc = new Calculator();

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);


let result =  powerCalc.calculate("2 ** 3");