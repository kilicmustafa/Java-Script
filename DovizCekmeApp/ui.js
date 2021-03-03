
function UI(firstCurrency ,secondCurrency){
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;

    this.outputFirst = document.querySelector("#outputFirst");
    this.outputSecond = document.querySelector("#outputSecond");
    this.outputResult = document.querySelector("#outputResult");

}

UI.prototype.changeFirst = function(){
    this.outputFirst.textContent = this.firstCurrency.options[this.firstCurrency.selectedIndex].textContent;
}

UI.prototype.changeSecond = function(){
    this.outputSecond.textContent = this.secondCurrency.options[this.secondCurrency.selectedIndex].textContent;

}

UI.prototype.displayResult = function(result){
    this.outputResult.value = result;
}
/* 
class UI {

    constructor(firstCurrency ,sencondCurrency){
        this.firstCurrency = firstCurrency;
        this.sencondCurrency = sencondCurrency;



        this.outputFirst = document.querySelector("#outputFirst");
        this.outputSecond = document.querySelector("#outputSecond");
        this.outputResult = document.querySelector("#outputResult");

    }


    changeFirst(){
        this.outputFirst.textContent = this.firstCurrency.options[this.firstCurrency.selectedIndex].textContent;
    }

    changeSecond(){
        this.outputSecond.textContent = this.sencondCurrency.options[this.sencondCurrency.selectedIndex].textContent;
    }

    displayResult(result){
        this.outputResult.value = result;
    }   



} */