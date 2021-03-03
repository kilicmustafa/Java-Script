const form = document.querySelector("#todo-form");
const todo = document.querySelector("#todo");
const filter = document.querySelector("#filter");
const list_group = document.querySelector(".list-group");
const card1 = document.querySelectorAll(".card-body")[0];
const card2 = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-todos");


eventListener();

function eventListener(){

    form.addEventListener("submit" ,fromEvent);
    document.addEventListener("DOMContentLoaded" ,loadAllTodosToUI);
    card2.addEventListener("click" ,deleteTodo);
    filter.addEventListener("keydown" ,filterTodos);
    clear.addEventListener("click",clearAllTodos);

}


function clearAllTodos(){

    if(confirm("Tüm todoları silmek istediğinizden emin misiniz ?")){

        // list_group.innerHTML = "";

        while(list_group.firstElementChild != null){
            list_group.removeChild(list_group.firstElementChild);
        }
        localStorage.removeItem("todos");

    }

}

function filterTodos(e){
    console.log(e.target.value);
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();

        if(text.indexOf(filterValue) === -1){
            listItem.setAttribute("style", "display:none !important");

        }
        else{
            listItem.setAttribute("style", "display : block");
        }

        
        

    });

}


function filterTodos(e){

    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){

        const text = listItem.textContent.toLowerCase();

        if(text.indexOf(filterValue) === -1){
            listItem.setAttribute("style", "display : none !importany");
        }
        else{
            listItem.setAttribute("style", "display : block");
        }


    });



}

function deleteTodoToStorage(todoDelete){
    let todos = getTodoToStorage();

    todos.forEach(function(todo ,index){
        if(todo === todoDelete ){
            todos.splice(index ,1);
        }
    })


    localStorage.setItem("todos" ,JSON.stringify(todos));
}

function deleteTodo(e){
    
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoToStorage(e.target.parentElement.parentElement.textContent);
        

        showAlert("success" ,"Todo Başarıyla silindi...")
    }



}


function loadAllTodosToUI(){

    let todos = getTodoToStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);
    })


}

function fromEvent(e){

    const value = todo.value.trim();
    console.log(value);

    if(value === ""){
        showAlert("danger" ,"Lütfen bir değer giriniz...");
    }
    else{
        addTodoToUI(value);
        addTodoToStorage(value);
        showAlert("success" ,"Todo Başarıyla eklendi...")
    }

    e.preventDefault();
}

function getTodoToStorage(){
    
    let todos ;

    if (localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
        
    }

    return todos
    

}

function addTodoToStorage(newTodo){

    let todos = getTodoToStorage();

    todos.push(newTodo);
    localStorage.setItem("todos" ,JSON.stringify(todos));

}


function addTodoToUI(e){

    /*
    <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>
    */

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.appendChild(document.createTextNode(e));

    const link = document.createElement("a");
    link.href = "#";
    link.class = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    
    li.appendChild(link);
    list_group.appendChild(li);
    todo.value = "";

}   



function showAlert(type ,message){
    const alert = document.createElement("div");
    alert.className = "alert alert-"+type 
    alert.textContent = message;
    
    card1.appendChild(alert);

    setTimeout(function(){
        alert.remove();
    },2000);

    
}