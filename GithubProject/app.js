const form = document.querySelector("#github-form");
const githubName = document.querySelector("#githubname");
const repos = document.querySelector("#repos");
const clearLastUsers = document.querySelector("#clear-last-users");
const lastUsers = document.querySelector("#last-users");


const git = new Github();

const ui = new UI();



eventListener();

function eventListener(){

    form.addEventListener("submit" ,getData)
    clearLastUsers.addEventListener("click" ,clearAllSearched);
    document.addEventListener("DOMContentLoaded" ,getAllSearched);

}




function getData(e){

    let username = githubName.value;
    

    if( username === ""){
        ui.showError("Lütfen değer girin");
    }
    else{
        git.getGithubData(username)
        .then(infos =>{

            if(infos.user.message === "Not Found"){
                ui.showError("Kullanıcı Bulunamadı");
            }

            else{

                ui.addSearchedUserToUI(username)
                Storages.addSearchedUserToStorage(username)
                ui.showUsersInfo(infos.user);
                ui.showRepoInfo(infos.repos);
            }

        }
            
            
            
            )
        .catch(err =>ui.showError(err))
        }
    


    ui.clearInput();

    e.preventDefault();
}





function clearAllSearched(){


    if( confirm("Emin misiniz ? ") ){
        ui.clearLastSearched();
        Storages.clearAllSearchedUsersFromStorage();

    }
    


}



function getAllSearched(){


    let users = Storages.getSearchedUsersFromStorage();

    let resault;
    users.forEach(user =>{

        resault += `<li class="list-group-item">${user}</li>`;
    })


    lastUsers.innerHTML = resault;
}