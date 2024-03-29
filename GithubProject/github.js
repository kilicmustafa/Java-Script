class Github{

    constructor(){
        this.url = "https://api.github.com/users/";
    }


    async getGithubData(username){
        const responseUser = await fetch( this.url +username)
        const responseRepo = await fetch(this.url + username + "/repos")


        const UserJson = await responseUser.json();
        const RepoJson = await responseRepo.json();


        return {
            user : UserJson,
            repos : RepoJson
        }

    }




}


