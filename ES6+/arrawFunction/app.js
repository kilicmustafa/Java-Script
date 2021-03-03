/* const merhaba = function(){
    console.log("hello");
}

merhaba(); */

/* 
const merhabe = function(FirstName){
    console.log("Merhaba",FirstName);

}



const merhabe2 = (FirstName ,LastName) => { console.log("Naber" ,FirstName ,LastName)};


merhabe("ali");
merhabe2("mustafa","kılıç")

const cube = x => x*x*x;

const kup = function(x){
    return x*x*x
}



console.log( cube(4) );
console.log( kup(5) );



const arr = ["python","java","c#"];

const [number1,number2] = arr;

console.log(number1, number2);



const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
}

const {a:number3, b:number4, c:number5} = numbers;
console.log(number3,number4,number5);


const getLangs = () => ["py","js","jdk"];

const[lang1 ,lang2 ,lang3] = getLangs();
console.log(lang1,lang2,lang3);


const person =  {
    name :"mustafa",
    year: 2001,
    salary: 3000,
    showInfos:  () => console.log("bilgiler gösteriliyor")
}

const {
    name:isim,
    year:yil,
    salary:maas,
    showInfos:bil_mesaji
} = person ;


console.log(isim, yil, maas)
bil_mesaji();

 */
// spread Operator


/* const langs = ["python" ,"java" ,"spss"];

const [a,...aa] = langs;

console.log(a);
console.log(aa);

 */

/* const numbers = [1,2,3,4,5,6,7,8];

const [d,f,...e] = numbers;
console.log(d,f );
console.log(e);


const addNumbers = (x,y,z) => console.log(x+y+z);

addNumbers(...numbers);



for (let index in numbers){
    console.log(numbers[index]);
}

console.log("for - off döngüsü");

for (let number of numbers){
    console.log(number);
} */

/* let myMap = new Map();

const key1 = "Mustafa";
const key2 = {a:10, b:20, c:30};
const key3 = () => 3 ;
 */
/* myMap.set(key1, "isim değeri");
myMap.set(key2, "puan değerleri" );
myMap.set(key3, "bitirdiği projeler");


console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));


console.log(myMap);
console.log(myMap.size);

 */
/* 
 const cities = new Map();


cities.set("Ankara" ,5);
cities.set("İstanbul" ,15);
cities.set("İzmir" ,4)
 */

/* for(let key of cities.keys()){
    console.log(key);
}

for(let value of cities.values()){
    console.log(value);
}
 */
/* cities.forEach(function(value ,key){
    console.log(key,value);
});
 */


/*  for(let [key,value] of cities){
     console.log(key,value);
 }

 */
/*  for(let icerik of cities){
     console.log(icerik[0] ,icerik[1]);
    
 } */

/* for(let value of cities){
    console.log(value);
}

for(let key of cities){
    console.log(key);
}
 */

/* 
 const arr= [["key1" ,"value2"],["key2" ,"value2"]];
 
 const mapFromArr = new Map(arr);
 
 console.log(mapFromArr);



const newMap =  new Map();

newMap.set("key1" ,"value1");
newMap.set("key2" ,"value2");
newMap.set("key3" ,"value3");

const newArr = Array.from(newMap);
console.log(newArr);
 */


/* const ad = "Mustafa";
const names = "Mustafa";


if (ad === names){
    console.log("eşit");
}
 */
/* 
const arr1 = [1,2,3];
const arr2 = [1,2,3];

if (arr1 === arr2){
    console.log("eşit");
} */

/* const cities = new Map();

const key = ["izmir"]

cities.set("Ankara" ,5);
cities.set("İstanbul" ,15);
cities.set(key ,4);

console.log(cities.get(key));


 */
/* 
const mySet = new Set();


mySet.add(100);
mySet.add(100);
mySet.add("kılıç");
mySet.add("true");
mySet.add(["array"]);
mySet.add({"nesne":1});


console.log(mySet);

console.log(mySet.has(["array"]));
console.log(mySet.has(100));
console.log(mySet.size);


mySet.forEach( function(value){
    console.log(value);
});


mySet.delete("kılıç");
console.log("ayrım");
for(let value of mySet){
    console.log(value);
} */



/* const person1 = {
    names : "mustafa",
    age : 19,
    salary : "yok",
    showInfos : () => console.log(person1.names ,person1.age ,person1.salary)

}


const person2 = {
    names : "ali",
    age : 30,
    salary : "4000",
    showInfos : () => console.log(person2.names ,person2.age ,person2.salary)
}




person1.showInfos();
person2.showInfos();



function Employee(name ,age ,salary){
    this.name = name;
    this.age = age;    
    this.salary = salary;
    this.info = this;
    this.showInfos = () => console.log(this.name ,this.age ,this.salary ,this.info);

}



const emp1 = new Employee("Zehra" ,27 ,"yok");

emp1.showInfos()


const emp2 = new Employee("Fatih" ,33 ,3000);

emp2.showInfos()


console.log(this) */

/* 
const object = new Object();
const object1 = new Object();

object.name = "mustafa";

console.log(object);
 */

/* function Employee(name ,age){
    this.name = name;
    this.age = age;
    this.showInfos = () => console.log(this.name ,this.age);

}

const emp1 = new Employee("Kerim" ,21);

console.log(emp1);

emp1.showInfos();


console.log(emp1.toString()); */

/* 
function Employee(name ,age){
    this.name = name;
    this.age = age;
    this.showInfos = () => console.log("name : "+ this.name ,"Age : " ,this.age);
}

const empt1 = new Employee("Mert" ,20);
const empt2 = new Employee("Emre" ,20);
empt1.showInfos();
empt2.showInfos();
 */



/* function Employee(name ,age){
    this.name = name;
    this.age = age;
}

Employee.prototype.showInfos = function() {console.log("ad : " ,this.name ,"yaş : " ,this.age);}

empt3 = new Employee("Ömer Faruk" ,21);
empt4 = new Employee("Ahmet furkan" ,18);

empt3.showInfos()
empt4.showInfos()

console.log(Employee);
console.log(empt3);
console.log(empt4);
 */

/* 
const obj = {

    test1:function(){
        console.log(test1);
    }
    
    ,test2:function(){
        console.log(test2);
    }
}


console.log(obj);
const emp = Object.create(obj);
emp.name = "mustafa";
emp.age = 19;

console.log(emp);
 */

/* function person() {
}

person.prototype.test1 = function(){
    console.log("test1");
}

person.prototype.test2 = function(){
    console.log("test2");
}

function Employee(name ,age){
    this.name = name;
    this.age = age;

}

Employee.prototype = Object.create(person.prototype);

console.log(Employee);




const emp = new Employee("Mustafa" ,19);
console.log(emp);





 */

/* const obj1 = {
    number1: 10,
    number2: 20
}

const obj2 = {
    number1 : 30,
    number2 : 40
}



function addNumbers(number3 ,number4){
    console.log(this.number1 + this.number2 + number3 + number4);
}

addNumbers(100,200);
addNumbers.call(obj1 ,100 ,200);
addNumbers.call(obj2,100 ,200);

addNumbers.apply(obj1 ,[300,400]);
addNumbers.apply(obj2 ,[400,500]);



function getNumbersTotal(number3 ,number4){
    return this.number1 + this.number2 + number3 + number4;
}

const copyFunc1 = getNumbersTotal.bind(obj1);
const copyFunc2 = getNumbersTotal.bind(obj2);

console.log(copyFunc1(10 ,20));
console.log(copyFunc2(30,40));




 */


/* 
function Person(name ,age){
     this.name = name;
     this.age = age;
}

Person.prototype.showInfos = function (){
    console.log("ad : " ,this.name ,"yaş : " ,this.age);
}



function Employee(name ,age ,salary){
    Person.call(this,name ,age);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function () {
    console.log("employee");

}


Employee.prototype.showInfos = function ()
{
    console.log("isim : " + this.name + "Age : " + this.age + "Salary : " + this.salary);
}
const emp = new Employee("mustafa",19 ,3000);
emp.showInfos();
console.log(emp);



 */

/* 
 class Employee{

    constructor(name ,age ,salary){
        this.name = name ;
        this.age = age;
        this.salary = salary;
    }

    showInfos() {
        console.log("Name : " +this.name  + "Age : " + this.age + "Salary : " +this.salary);

    }

 }


 const emp = new Employee("Ali" ,23 ,4000);

 emp.showInfos();

 */

/* class Matematik{


    sqrt(x){
        console.log(x*x);
    }

    static cube(x){
        console.log(x*x*x);
    }
}

const math = new Matematik();

console.log(math);
math.sqrt(3);

Matematik.cube(3);


 */

 class Person {

    constructor(name ,age){
        this.name = name;
        this.age = age;
    }

    showInfos() {

        console.log("Name : " + this.name + " Age : " + this.age );
    }


}


class Employee extends Person {

    constructor(name ,age ,salary){

        super(name ,age);
        this.salary = salary;
    }

    showInfos() {
        console.log("Name : " + this.name + " Age : " + this.age  + "Salary : " + this.salary);
    }
        
    raiseSalary(amount){
        this.salary += amount;
    }

    toString(){
        console.log("Employee");
    }
}


const emp = new Employee("Mert" ,20 ,5000);
console.log(emp);
emp.raiseSalary(300);
emp.showInfos();


























































































































