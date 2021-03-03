const express = require("express");

const {accessControl} =require("./middleware");

const app = express();
const PORT = 5000;


let users = [{id :1 ,name : "Mustafa" ,age : 19 ,salary:3000}
,{id : 2 ,name : "Ali" ,age:19 ,salary: 4000}]

// app.use(accessControl);
app.use(express.json());
// Get request 
app.get("/users", (req ,res ,next) => {
    
    res.json({
        success : true,
        data:users
    });
})

app.post("/users" ,(req ,res ,next) =>{

    const user = req.body;
    users.push(user)
    res.json({
        success: true,
        data : "Post"

    })
    console.log(req.body);
    console.log(users)
})

app.put("/users/:id" ,(req ,res ,next) =>{
    const id = parseInt(req.params.id);


    for( let i = 0; i < users.length; i++ ){


        if (users[i].id === id){
            
            users[i] = {
                ...users[i],
                ...req.body
            };
            
        }
    }
    res.json({
        success : true,
        data : users
    })
    console.log(users)
})

app.delete("/users/:id" ,(req ,res ,next) =>{

    const id = parseInt(req.params.id);

    for(let i = 0; i < users.length; i++){
        
        if(users[i].id === id){
            users.splice(i ,1);
        }
    }
    
    res.json({
        success : true,
        data: users
    })
})

app.listen(PORT ,() => {
    console.log("Server Start : " + PORT);
})

