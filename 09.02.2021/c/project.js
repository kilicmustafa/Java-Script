// default value in array

let [name = "Guest", surname = "Anonymous"] = ["Adimn"];

/// used prompt in array

let [name = prompt("name ? "), surname = prompt("Surname ? ")] = ["Julius"];

// object destruction

let options = {
  title: "Menu",
  width: 200,
  height: 300,
};

let { width: w = 100, height: h = 150, title } = options;

///

let { title, ...rest } = options;
