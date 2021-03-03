class Storages{



    static getSearchedUsersFromStorage(){
        let users ;

        if( localStorage.getItem("searched") === null ){
            users = [];
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));
        }


        return users;
    }


    static addSearchedUserToStorge(username){
        let users =this.getSearchedUsersFromStorage();


        if(users.indexOf(username) ===-1){
            users.push(username);
        }

        localStorage.setItem("searched" ,JSON.stringify(users));

    }


    static clearAllSearchUsersFromStorage(){
        
        localStorage.removeItem("searched");

        
    }


}



