const btn = document.getElementById("change").addEventListener("click" ,getJsonNetwork);



function getJsonNetwork(){


    const xhr = new XMLHttpRequest();

    xhr.open("GET" ,"https://api.exchangeratesapi.io/latest" ,true);

    xhr.onload = function(){
        if(this.status){

            const response = JSON.parse(this.responseText);
            const rate = response.rates.TRY;
        
            const input = Number(document.getElementById("amount").value);
            

            document.getElementById("tl").value = input  * rate;

            console.log(rate);
        }
    }

    
    xhr.send();
}



let i = 0 ;

let value = setIntervar(function(){
    i++;
    console.log("sayi : " ,i);
} ,1000)


document.getElementById("btn").addEventListener("click" , function(){
    clearInterval(value);
})