


eventListener();


function eventListener(){
    document.getElementById("translate-form").addEventListener("submit" ,wordTranslate);
    // Change
    document.getElementById("language").onchane = function(){
        // arayüz
    }

}

const translate = new Translate(document.getElementById("word").value , document.getElementById("language").value);

function wordTranslate(e){

    translate.changeParameters(document.getElementById("word").value ,document.getElementById("language").value);
    
    translate.translateWord(function(err,response){

        if(err){
            console.log(err);
        }
        else{
            console.log(response);
        }
    });


    e.preventDefault();

}