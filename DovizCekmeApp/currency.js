

function Currency(firstCurrency ,secondCurrency){
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;
    this.url = "https://api.exchangeratesapi.io/latest?base=";
    this.amount = null;


    this.xhr = new XMLHttpRequest();

}

Currency.prototype.exchange = function(callback){

    let comp = this.url + this.firstCurrency;
    this.xhr.open("GET" , comp);

    this.xhr.onload = () =>{

        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);

            const text = json["rates"][this.secondCurrency];

            const amound2 = Number(this.amount);

            let total = text +amound2;

            callback(null ,total);
        }

        else{
            
            callback("Bir hata oluştu" ,null);
        }

    }


    this.xhr.send();


}

Currency.prototype.changeAmount = function(newAmount){ 
    this.amount = newAmount;
}


Currency.prototype.changeFirstCurrecy = function(newFirstCurrency){
    this.firstCurrency = newFirstCurrency;
}


Currency.prototype.changeSecondCurrency = function(newSecondCurrency){
    this.secondCurrency = newSecondCurrency;
}



/* 

class Currency{

    constructor(firstCurrency ,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base="; 
        this.amount = null;
    }


    changeAmount(newAmount){
        this.amount = newAmount;
    }


    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }

    exchange(){
        return new Promise((resolve ,reject) => {

            fetch(this.url + this.firstCurrency)
            .then(response => response.json())
            .then(data =>{

                const strify = data["rates"][this.secondCurrency];
                const amount2 = Number(this.amount);

                let total = strify * amount2;
                
                resolve(total);
            })
            .catch(err => reject(err));


        });
        


    }

    
} */