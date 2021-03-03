function Storage(){


}


Storage.prototype.addFilmsToLocalStorage = function(newFilm){

    let filmList = this.getItemToLocalStorage();

    filmList.push(newFilm);

    localStorage.setItem("films" , JSON.stringify(filmList));
}


Storage.prototype.getItemToLocalStorage = function(){

    let films;  

    if(localStorage.getItem("films") === null){
        films = [];
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));
    }

    return films;
}

Storage.prototype.deleteFilmFromStorage = function (filmName){
    let films = this.getItemToLocalStorage();

    films.forEach( function(film ,index){

        if(film.title === filmName){
            films.splice(index ,1);
        }
        
    } );

    localStorage.setItem("films" ,JSON.stringify(films));
}

Storage.prototype.clearAllFilmFromStorage = function(){

    localStorage.removeItem("films");
}