const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearFilms = document.getElementById("clear-films");

// UI objesini yükleme 
const ui = new UI();



// Storage objesini yükleme
const storage = new Storage();

// Tüm eventleri yükleme
EventListener();

function EventListener(){

    form.addEventListener("submit" ,addFilm);
    document.addEventListener("DOMContentLoaded" ,function(){
        let films = storage.getItemToLocalStorage();
        ui.loadFilmsToUI(films);
    });
    
    cardBody.addEventListener("click" ,deleteFilm);

    clearFilms.addEventListener("click" ,clearAllFilm)
}

function addFilm(e){
    console.log("burdayam");
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    

    if (title === "" || director === "" || url === "" ){
        
        
        ui.displayMessage("danger" ,"Lütfen bilgileri doldurunuz..");

    }
    else {
        const newFilm = new Film(title ,director ,url);

        ui.addFilmToUI(newFilm);
        storage.addFilmsToLocalStorage(newFilm);
        ui.displayMessage("success" ,"Film başarıyla eklendi");
    }   


    ui.clearInputs(titleElement ,directorElement ,urlElement);

    e.preventDefault();
}

function deleteFilm(e){
    

    if (e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        
    }
    
}


function clearAllFilm(){

    if(confirm("Emin misiniz ?")){
        ui.clearAllFilmFromUI();
        storage.clearAllFilmFromStorage();
        ui.displayMessage("warinig" ,"Tüm filmleriniz silindi");
    }

    
}