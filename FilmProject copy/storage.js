class Storage{
    
    static addFilmToStorage(FilmInfo){

        let films = this.getFilmFromStorage();

        films.push(FilmInfo);

        localStorage.setItem("films" ,JSON.stringify(films));
    }
    static getFilmFromStorage(){

        let films ;

        if (localStorage.getItem("films") === null){
            films = [];
        }

        else{
            films = JSON.parse(localStorage.getItem("films"));
        }

        return films;
    }


    static loadFilmsFromStorage(){
        let films = this.getFilmFromStorage();
        
        
        
        films.forEach(function(film) {
            UI.addFilmToUI(film) ; 
        });
    }
    
    static deleteFilmFromStorage(name){
        let films = this.getFilmFromStorage();

        films.forEach(function(film,index){
            console.log(film.title);
            if(film.title === name){
                
                films.splice(index ,1);
            }
        })

        localStorage.setItem("films" ,JSON.stringify(films));
    }

    static clearFilmsFromStorage(){

        localStorage.removeItem("films");
    }
}