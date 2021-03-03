






/* function process1(callback) {

    setTimeout(function(){
        console.log("process1");
        callback;
    } ,3000)
}

function process2(){

    setTimeout( function(){
        console.log("procces2");
    } ,2000)
}


process1(process2());

console.log("işlemsonu");




 */



/* const langs =  ["python" ,"java" ,"c++"];


function addLang(lang ,callback){
    setTimeout(function(){
        langs.push(lang)
        callback();
    } ,3000)
    
}


function showLangs(){
    setTimeout( function() {
        langs.forEach(function(lang) {
            console.log(lang);
        });
    } ,2000)
}


addLang("javaScript" ,showLangs);

 */





/*  const person = {


    age: 25,

    tellAge : function(){
        console.log(this.age);
    },

    errow : () =>{
        console.log(this.age);
    }
  }


 person.tellAge();
 person.errow();
 */

/* 
 class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }


    get(link ,callback){

        this.xhr.open("GET",link);

        this.xhr.onload = function (){

            if(this.xhr.status === 200){
                callback(null , this.xhr.responseText);
            }
            else{
                callback("Bir hata oluştu" ,null)
            }


        }.bind(this);

        
        this.xhr.send()
    }

    post(url ,data ,callback){
        this.xhr.open("POST" ,url )
        this.xhr.setRequestHeader("Content-type" ,"application/json");

        this.xhr.onload = () =>{
            if(this.xhr.status === 201){

                callback(null ,this.xhr.responseText);
            }
            else{
                callback("Bir hata oluştu" ,null);
            }
        }
    
        this.xhr.send(JSON.stringify(data));
    
    }


    put(url ,data ,callback){
        this.xhr.open("PUT" ,url )
        this.xhr.setRequestHeader("Content-type" ,"application/json");

        this.xhr.onload = () =>{
            if(this.xhr.status === 200){

                callback(null ,this.xhr.responseText);
            }
            else{
                callback("Bir hata oluştu" ,null);
            }
        }
    
        this.xhr.send(JSON.stringify(data));
    
    }

    delete(link ,callback){

        this.xhr.open("DELETE",link);

        this.xhr.onload = function (){

            if(this.xhr.status === 200){
                callback(null , this.xhr.responseText);
            }
            else{
                callback("Bir hata oluştu" ,null)
            }


        }.bind(this);

        
        this.xhr.send()
    }

 }



const request = new Request(); */
/*  
request.get("https://jsonplaceholder.typicode.com/albums" ,function(err ,response){
    if(err === null){
        console.log(response);
    }
    else{
        console.log(err);
    }
})
 */

/* request.post("https://jsonplaceholder.typicode.com/albums" ,{userId:2, title:"Thiller"},function(err ,album){
    if(err === null){
        console.log("calıştı");
        console.log(album);
        
    }
    else{
        console.log(err);
    }

})

request.put("https://jsonplaceholder.typicode.com/albums/1" ,{userId:2, title:"Thiller"},function(err ,album){
    if(err === null){
        console.log("calıştı");
        console.log(album);
        
    }
    else{
        console.log(err);
    }

})

request.delete("https://jsonplaceholder.typicode.com/albums/1" ,function(err ,response){
    if(err === null){
        console.log(response);
        console.log("BAŞARIYLA SILINDI")
    }
    else{
        console.log(err);
    }
}) */

/* 

function getData(data){
    return new Promise(function(resolve ,reject){


        setTimeout(function(){
            if(typeof data ==="string"){
                resolve(data);
            }
            else{
                reject( new Error("Lütfen string bir değer girin"));
            }
        },5000)
    })
}


getData(24)
.then(response => console.log("Gelen değer : " + response))
.catch(err => console.error(err));



function addTwo(number){

    return new Promise((resolve ,reject) => {
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number + 2);
            }
            else{
                reject(new Error("Lütfen bir sayı giriniz"));
            }
        },3000)
    }) 
}


addTwo(3)
.then( response => {
    console.log(respose)
    return response + 2;
})
.then( response2 => {
    console.log(response2)
})
.catch(err => console.error(err)); */


/* function fromText(){

    this.fetch("example.txt")
    .then(response => response.text()) 
    .then( response2 => console.log(response2) )
    .catch(err => console.log(err));
    
}

fromText();


function fromJson(){

    this.fetch("example.json")
    .then(response => response.json())
    .then(response2 => console.log(response2))
    .catch(err => console.log(err));
}


function getExtranalAPI(){
    this.fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(response2 => response2.rates.TRY)
    .then(response3 => console.log(response3))
    .catch(err => console.log(err));
}

getExtranalAPI();
 */


class Request{

    async get(url){
        const response = await fetch(url);

        const responseData = await response.json();

        return responseData;
    }

    async post(url ,data){
        const response = await fetch(url  ,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }});

        const responseData = await response.json();

        return responseData;

    }

    async put(url ,data){
        const response = await fetch(url , {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              } });
            
        const responseData = await response.json();

        return responseData;


    }

    async delete(url){

        const response = await fetch(url);

        return "Post başarılı bir şekilde silindi";

    }

}



const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums")
.then(response => console.log(response))
.catch(err => console.log(err));

request.post("https://jsonplaceholder.typicode.com/albums" ,{userId:4 ,title:"Kılıç"})
.then(response => console.log(response))
.catch(err => console.error(err));


request.put("https://jsonplaceholder.typicode.com/albums/1" ,{userId:3 ,title:"Mustafa"})
.then(response => console.log(response))
.catch(err => console.error(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(response => console.log(response))
.catch(err => console.error(err));



/* 

class Request{

    get(url){
        return new Promise((resolve,reject) =>{
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

        })
    }


    post(url ,data){
        
        return new Promise((resolve ,reject) => {

        fetch(url , {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }})

            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
            }

        )
    }


    put(url ,data){
        fetch(url , {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              } })

        .then(response => response.json())
        .then(response2 => console.log(response2))
        .catch(err => console.error(err))



    }

    delete(url){

        return new Promise((resolve ,reject) => {
            fetch(url ,{method:'DELETE'})
            .then(response => resolve("Veri silme işleme başarılı"))
            .catch(err => reject(err));
        })
        
    }
} */



/* const request = new Request();
request.put("https://jsonplaceholder.typicode.com/albums/1" ,{userId:3 ,title:"Mustafa"})


request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(response => console.log(response))
.catch(err => console.log(err)); */

/* const request = new Request();
request.post('https://jsonplaceholder.typicode.com/albums' ,{userId : 3 ,title : "llorem tab 5 "})
.then(deger => console.log(deger))
.catch(err => console.log(err));
 */







/* const request = new Request();
let albums;
request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => console.log(albums))
.catch(err => console.log(err));
 */


/* async function test(data){

    return data;

}


console.log(test("Mustafa")); */

/* async function test(data){

    let promise =  new Promise((resolve , reject) =>{

        setTimeout(()=>{
            if (typeof data === "string"){
                resolve(data);
            }
            else{
                reject(new Error("Bir hata oluştu"))
            }

        } ,5000 )
    })

    let response = await promise;

    console.log("naber");
    return response;
    
}

test(1)
.then(promise => console.log(promise))
.catch(err => console.log(err))

 */


async function getCurrency(url){
    const response = await fetch(url);

    const data = await response.json();

    return data.rates.TRY;
}

getCurrency("https://api.exchangeratesapi.io/latest").then(aa => console.log(aa))