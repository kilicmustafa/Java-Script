import {Request} from "./request";
import {UI} from "./ui"

const form = document.getElementById("employee-form");
const nameElment = document.getElementById("name");
const departmentElement = document.getElementById("department");

const salaryElement = document.getElementById("salary");
const employeesList = document.getElementById("employees");

const updateEmployeeButton = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");
const ui = new UI()

let updateState = null;

addEventListener();

function addEventListener(){
    document.addEventListener("DOMContentLoaded" ,getAllEmployes);
    form.addEventListener("submit" , addEmployee);
    employeesList.addEventListener("click" ,UpdateOrDelete);
    updateEmployeeButton.addEventListener("click" ,updateEmployee);
}

function deleteEmployee(targetEmployee){
    const id = targetEmployee.parentElement.previousElementSibling.previousElementSibling.textContent;

    request.delete(id)
    .then(message => {
        ui.deletePersonFromUI(targetEmployee.parentElement.parentElement);
        console.log(message);

    })
}

function UpdateOrDelete(e){

    
    if( e.target.id === "delete-employee" ){
        deleteEmployee(e.target);
    }
    else if (e.target.id === "update-employee"){
        
        ui.updateEmployeeController(e.target.parentElement.parentElement);
        
        if(updateState === null){
            updateState = {
                updateId : e.target.parentElement.parentElement.children[3].textContent,
                updateParent: e.target.parentElement.parentElement
            }
        }else{
            updateState = null;
        }



    }
    
}

function addEmployee(e){
    const employeeName = nameElment.value.trim();
    const employeeDepartment = departmentElement.value.trim();
    const employeeSalary = salaryElement.value.trim();

    request.post({name : employeeName ,department : employeeDepartment ,salary :Number(employeeSalary)})
    then(employee => {
        ui.addEmployee(employee);
    })
    

    ui.clearInput();

    e.preventDefault();
}

function getAllEmployes(){
    request.get()
    .then(employee =>{
        ui.addAllEmployeeToUI(employee);
    })
    .catch(err => console.log(err))
}


function updateEmployee(){
    if(updateState){
        const data = {name : nameElment.value.trim() ,department : departmentElement.value.trim() , salary: Number(salaryElement.value.trim())}
        request.put(data ,updateState.updateId)
        .then( UpdatedEmplooye =>{
            ui.UpdateEmployeeOnUI(UpdatedEmplooye ,updateState.updateParent)
        })
        .catch(err => console.log(err))
    }
    
}
/* request.get()
.then(employees => console.log(employees))
.catch(err => console.log(err));
 */

/* request.post({name:"Serhat Say" ,department:"Pazarlama" ,salary: 4000})
.then(empoloyee =>console.log(empoloyee))
.catch(err => console.log(err))
 */
/* 
 request.put({name:"aaaaaaaaaaa Say" ,department:"Pazarlama" ,salary: 333},1) */

/*  request.delete(3); */