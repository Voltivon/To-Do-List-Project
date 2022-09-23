import { displayToDo } from "./domManip";

export function saveToDoLocal({Title, Description, DueDate, Priority, Notes, CheckList}){
    console.log("saving object to local storage");
    localStorage.setItem("Title", document.getElementById("Title").value);
    localStorage.setItem("Description", document.getElementById("Description").value);
    localStorage.setItem("DueDate", document.getElementById("DueDate").value);
    localStorage.setItem("Priority", document.getElementById("Priority").value);
    localStorage.setItem("Notes", document.getElementById("Notes").value);
    localStorage.setItem("CheckList", CheckList);

    displayToDo();

    return {Title, Description, DueDate, Priority, Notes, CheckList};

}