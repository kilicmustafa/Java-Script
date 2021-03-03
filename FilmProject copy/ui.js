class UI{


    static addFilmToUI(FilmInfo){

        const filmList = document.getElementById("films");

        filmList.innerHTML += `<tr>
        <td><img src="${FilmInfo.url}" class="img-fluid img-thumbnail"></td>
        <td>${FilmInfo.title}</td>
        <td>${FilmInfo.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr> ` ;
    }

    static displayShowMessage(type ,message){
        const card = document.querySelectorAll(".card-body")[0];

        let div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;

        card.appendChild(div);

        setTimeout(function(){
            div.remove();
        },1500 );
    }


    static clearContent(element1 ,element2 ,element3) {
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }

    static deleteFilmFromUI(e){
        e.target.parentElement.parentElement.remove();
    }

    
    static clearFilmsFromUI(){


        const FilmsList = document.querySelector("#films");

        while(FilmsList.firstElementChild !== null){
            FilmsList.firstElementChild.remove();
        }

        
        

    }
}