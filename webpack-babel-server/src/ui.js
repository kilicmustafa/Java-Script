export class UI{

    constructor(){
        this.employeesList = document.getElementById("employees");
        this.updateButton = document.getElementById("update");
        this.nameInput = document.querySelector("#name");
        this.departmentInput = document.querySelector("#department");
        this.salaryInput = document.querySelector("#salary");

    }

    addEmployee(element){
        this.employeesList.innerHTML += `            
            <tr>                                          
            <td>${element.name}</td>
            <td>${element.department}</td>
            <td>${element.salary}</td>
            <td>${element.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>                   
            `
    }

    deletePersonFromUI(element){
        element.remove();


    }
    clearInput(){
        this.nameInput  = "";
        this.departmentInput = "";
        this.salaryInput= "";


    }


    addAllEmployeeToUI(employees){
        let result = "";

        employees.forEach(element => {
            
            result += `            
            <tr>                                          
            <td>${element.name}</td>
            <td>${element.department}</td>
            <td>${element.salary}</td>
            <td>${element.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>                   
            `
        });

        this.employeesList.innerHTML = result;
    }

    updateEmployeeController(target){
        if(this.updateButton.style.display === "none"){
            this.updateButton.style.display = "block";
            

            this.addAllEmployeeInfoToInputs(target);
            
            
        }
        else{
            this.updateButton.style.display = "none";
        }
    }

    addAllEmployeeInfoToInputs(target){
        
        const children = target.children;
        
        this.nameInput.value = children[0].textContent;
        this.departmentInput.value = children[1].textContent;
        this.salaryInput.value = children[2].textContent;

        
    }

    UpdateEmployeeOnUI(UpdatedEmplooye ,tr){
        tr.innerHTML =`
        <tr>                                          
        <td>${UpdatedEmplooye.name}</td>
        <td>${UpdatedEmplooye.department}</td>
        <td>${UpdatedEmplooye.salary}</td>
        <td>${UpdatedEmplooye.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr> 
        `;
        this.clearInput();
    }

    
}