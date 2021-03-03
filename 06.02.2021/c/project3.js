let users = { name: "emin" };

let userCopy = users;

if (users === userCopy) {
  console.log("ikiside eşit");
} // equal

let a = {};
let b = {};

if (a === b) {
  console.log("İkiside eşit");
} // not equal cuz they don't take refererance from same adress

/////////// Object clone -- No referance
let user = {
  name: "john",
  age: 30,
};

let clone = new Object();

for (key in user) {
  clone[key] = user[key];
}

clone.name = "Nazım";

console.log(clone.name, user.name);

let user4 ={
  name :"Metin",
  age : 33
}

let cloneUser4 = new Object();

for(key in user4){
  cloneUser4[key] = user4[key];
}
/// Object.assign with Marge several object 

let kullanici = {
    isim : "Mümtaz",
}

let let1 = {
    okuma : true
}
let let2 = {
    write = false
}



let margeObject = Object.assign(kullanici ,let1 ,let2);
Object.assign(kullanici ,let1 ,let2); // this method merge all of object 


/// different use way

let klon = Object.assign({} ,kullanici)


// obje klonlama 

let klon1 = Object.assign({} ,kullanici)