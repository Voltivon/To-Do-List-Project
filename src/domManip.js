import { defaultProjectLoad } from "./defaultProjectLoad";

export function domManip(){

    // initial dom load
    const contentDiv = document.getElementById("content-div");
    const projectIniitalLoad = document.createElement("div");
    projectIniitalLoad.textContent = defaultProjectLoad().projectTitle;
    contentDiv.appendChild(projectIniitalLoad);
}

export function displayTheForm(){
    document.querySelector(".add-todo-form").style.display = "";
}

export function addItemToChecklist(){
    const addItem = document.getElementById('add-to-checklist').value;

    if(addItem !== ""){
        const ul = document.querySelector(".todo-ul");
        const li = document.createElement('li');
        li.textContent = addItem;
        const span = document.createElement("span");
        span.className = "remove-checklist-item";
        const removeIcon = document.createTextNode("\u00D7");
        li.appendChild(span)
        span.appendChild(removeIcon)
        ul.appendChild(li);
        document.getElementById("add-to-checklist").value = ""
    }

    if(document.querySelectorAll("li").length > 0){
        console.log("Inside module of...,", document.querySelectorAll("li").length);
        const nodeListChecklist = document.querySelectorAll("li");
        console.log(nodeListChecklist);

        nodeListChecklist.forEach(checklistItem => {
            checklistItem.addEventListener('click', function removeItemFromChecklist(){
                checklistItem.remove();
            })
        })
    }
    else return;
}

export function clearForm(){
    const nodeListChecklist = document.querySelectorAll("li");
    for(let i = 0; i < nodeListChecklist.length; i++){
        nodeListChecklist[i].remove();
    }
    document.getElementById("add-todo").reset();
}

export function displayToDo(){

    const removeDivs = document.querySelectorAll(".card");
    console.log("show me the node count", removeDivs);
    for(let i = 0; i < removeDivs.length; i++){
        removeDivs[i].remove();
    }

    console.log("display to screen");
    const projects = document.querySelector(".projects");
    const newCard = document.createElement("div");
    newCard.classList.add(".card");
    projects.appendChild(newCard);

    let Title = localStorage.getItem("Title");
    let Description = localStorage.getItem("Description");
    let DueDate = localStorage.getItem("DueDate");
    let Priority = localStorage.getItem("Priority");
    let Notes = localStorage.getItem("Notes");
    let CheckList = localStorage.getItem("CheckList");

    let _displayArray = {Title, Description, DueDate, Priority, Notes, CheckList};
    console.log(_displayArray);

    for(let key in _displayArray){
        console.log(`${key}: ${_displayArray[key]}`);
        const para = document.createElement('p');
        para.textContent = (`${key}: ${_displayArray[key]}`);
        newCard.appendChild(para);
    }
}