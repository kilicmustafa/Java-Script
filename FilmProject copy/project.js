const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const card2 = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");


eventListener();

function eventListener(){

    form.addEventListener("submit" ,addFilm);
    card2.addEventListener("click" ,deleteFilm);
    clear.addEventListener("click" ,clearAllFilms);

    /* document.addEventListener("DOMContentLoaded" ,function(){
        let films = storage.getItemToLocalStorage();
        ui.loadFilmsToUI(films);
    }); */
    
}

// Load Films 
Storage.loadFilmsFromStorage();

function addFilm(e){

    

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    
    if(titleElement === "" || director === "" || url === "" ){
        UI.displayShowMessage("danger" ,"Lütfen tüm alanları doldurunuz...");

    }
    else{
        const FilmInfos = new Films(title,director ,url);
        UI.addFilmToUI(FilmInfos);
        Storage.addFilmToStorage(FilmInfos);

        UI.displayShowMessage("success" ,"Film eklendi")
        
    }

    UI.clearContent(titleElement ,directorElement ,urlElement);
    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){

        
        UI.deleteFilmFromUI(e)
        

        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    }
    
}


function clearAllFilms(){
    

    if(confirm("Emin misiniz ?")){
        UI.clearFilmsFromUI();
        Storage.clearFilmsFromStorage();
        UI.displayShowMessage("success" ,"Tüm Filimler Temizlendi")
    }

    
}