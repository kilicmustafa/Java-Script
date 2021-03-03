function UI(){



}


UI.prototype.addFilmToUI = function(newFilm) {
    

    const filmList = document.getElementById("films");

    filmList.innerHTML += `<tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`; 
} 


UI.prototype.clearInputs = function(element1 ,element2 ,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
}


UI.prototype.displayMessage = function(type ,message){

    const card = document.querySelector(".card-body");

    const div = document.createElement("div");
    div.className = `alert alert-${type}`;  
    div.textContent = message;

    card.appendChild(div);

    setTimeout(function (){
        div.remove();
    },1000);

}

UI.prototype.loadFilmsToUI = function(films) {

    const filmsList = document.querySelector("#films")

    films.forEach(function(film){

        filmsList.innerHTML += 
        `<tr>
    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
    <td>${film.title}</td>
    <td>${film.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`; 
    });
}


UI.prototype.deleteFilmFromUI = function(element){

    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllFilmFromUI = function(){

    let filmList = document.querySelector("#films");

    while(filmList.firstElementChild !== null){
        filmList.firstElementChild.remove();
    }

}