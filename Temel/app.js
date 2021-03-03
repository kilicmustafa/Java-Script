
const form = document.querySelector("#todo-form");
const todo = document.querySelector("#todo");
const filter = document.querySelector("#filter");
const list_group = document.querySelector(".list-group");
const card1 = document.querySelectorAll(".card-body")[0];
const card2 = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-todos");


eventListener();

function eventListener(){

    form.addEventListener("submit",formEvent);
    document.addEventListener("DOMContentLoaded" ,loadAllTodosToUI);
    card2.addEventListener("click" ,deleteTodo);
    filter.addEventListener("keyup", filterFromText);

    clear.addEventListener("click" ,ClearAllTodos);
}

function ClearAllTodos(e){
    if(confirm("Tüm todoları silmek istediğinizden emin misiniz.")){

        while(list_group.firstElementChild != null){
            list_group.removeChild(list_group.firstElementChild);
        }

        localStorage.removeItem("todos");
    }
}




function filterFromText(e){
    console.log(e.target);
    const filterValue = e.target.value.toLowerCase();
    const listItems  = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();

        if(text.indexOf(filterValue) === -1){
            listItem.setAttribute("style", "display: none !important");
        }

        else{
            listItem.setAttribute("style" , "display :block");
        }

    });

}

function deleteTodo(e){

    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        showAlert("success" ,"Todo Başarıyla silindi")
        deleteStorage(e.target.parentElement.parentElement.textContent);
    }
    
}

function deleteStorage(removeTodo){
    let todolar = getTodoFromStorage()
    todolar.forEach(function(todo){
        if(todo === removeTodo){
            let index = todolar.indexOf(removeTodo);
            todolar.splice(index ,1);
        }
    })

    localStorage.setItem("todos" , JSON.stringify(todolar));
}

function loadAllTodosToUI(){
    let todos = getTodoFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}





function formEvent(e){

    const  value = todo.value.trim();
    

    if(value === ""){
        showAlert("danger", "Lütfen bir todo girin...");
    }
    else {
        addTodoToUI(value);
        addTodoToStorage(value);
        showAlert("success", "Todo başarıyla eklendi...");
    }
    
    


    console.log(value);
    e.preventDefault();
}

function getTodoFromStorage(){
    let todos;
    

    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;

}


function addTodoToStorage(newTodo){
    let todos = getTodoFromStorage();

    todos.push(newTodo);
    localStorage.setItem("todos" ,JSON.stringify(todos));




}

function showAlert(type ,message){

    const alert = document.createElement("div");
    alert.className = 'alert alert-'+type;

    alert.textContent = message;

    card1.appendChild(alert);

    setTimeout(function(){
        alert.remove();
    },2000);
    console.log(alert);

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
    const listItem = document.createElement("li");


    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(e));
    listItem.appendChild(link);

    list_group.appendChild(listItem);
    todo.value = "";

}







































