function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user = makeUser("Mustafa", 19);
alert(user.name);

function makeUser2(name, age) {
  return {
    name,
    age,
  };
}

let user2 = makeUser2("Cengiz", 33);

let user3 = {
  name,
  age: 30,
};



// ------ Property existence test "in" operator // varlık kontrolü ---------



let user = {}

alert( user.noSuchProperty === undefined ); 


"key" in user 



let userss = { name : "Elif" ,age : 21};
alert("age" in user ) // True
alert("blabla bla" in user)

let key = "age";
alert(key in user )


let obj = {
  test : undefined
}

console.log(obj.test === undefined) // doesn't have obj test but that is not correct
console.log("test" in obj) // that is exist in it 



/// ----------- for in Loop // for in döngüsü -------


let user = {
  name : "Mustafa",
  age : 19,
  admin : true
}

for(let key in user){
  alert( key );
  alery( user[key] );
}








