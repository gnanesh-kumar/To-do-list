function addtask(){
    var taskinput =document.getElementById("taskinput");
    var taskList =document.getElementById("taskList");
    
    if(taskinput.value === ""){
        alert("Please enter a Task...");
        return;
    }

    var li =document.createElement("li");
    li.textContent = taskinput.value;

    var checkbox =document.createElement("input");
    checkbox.type ="checkbox";
    checkbox.addEventListener("change",function() {
        if (checkbox.checked) {
            li.classList.add("completed");
        }else{
            li.classList.remove("completed");
        }
    });

    var deleteBtn =document.createElement("button");
    deleteBtn.textContent = "Deleted";
    deleteBtn.addEventListener("click",function(){
        taskList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskinput.value));
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskinput.value="";
}