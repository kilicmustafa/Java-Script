let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  },
};

setTimeout(() => user.sayHi(), 1000);

// ...within 1 second
user = {
  sayHi() {
    alert("Another user in setTimeout!");
  },
};

// Another user in setTimeout?!?



function askPassword(ok ,fail){
  let password = prompt("Password" ,"")
  if(password == "rocstar") ok();
  else fail();

}


let user = {

  name : "john",

  loginOk(){
    alert(`${this.name}  logged in `);

  },

  loginFail(){
    alert(`${this.name} failed to log in `);
  },

}

askPassword(user.loginOk.bind(user), user.loginFail(user));
