const form = document.querySelector("#github-form");
const githubName = document.querySelector("#githubname");
const repos = document.querySelector("#repos");
const clearLastUsers = document.querySelector("#clear-last-users");
const lastUsers = document.querySelector("#last-users");



eventListener();


// nesne oluşturma 
const git = new Github();

const ui = new UI();


function eventListener(){

    form.addEventListener("submit" ,showUser);
    clearLastUsers.addEventListener("click" ,clearAllSearched);
    document.addEventListener("DOMContentLoaded" ,getAllSearched);
}


function showUser(){

    let username = githubName.value;


    if (username === ""){
         ui.showError("Lütfen bir kullanıcı adı giriniz");

    }
    else{
        git.getGithubData(username)
        .then(infos =>{


            if(infos.user.message === "Not Found"){
                 ui.showError("Böyle bir kullanıcı bulunamadı");
            }
            else{
                ui.addSearchedUserToUI(username)
                Storages.addSearchedUserToStorage(username)
                ui.showUsersInfo(infos.user);
                ui.showRepoInfo(infos.repos);
                
            }
        })
        .catch(err => ui.showError(err))
    }


    ui.clearInput();

    e.preventDefault();

    


}

function clearAllSearched(){
    if(confirm("Emin Misiniz ? ")){
        ui.clearLastSearched();
        Storages.clearAllSearchedUsersFromStorage();

    }

}


function getAllSearched(){

    let users = Storages.getSearchedUsersFromStorage();

    let resault;
    users.forEach(user =>{
        resault += `<li class="list-group-item"> ${user} </li> `
    })

    lastUsers.innerHTML = resault;
}