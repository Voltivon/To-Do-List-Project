import {compareAsc, format, parseISO, startOfToday} from "date-fns";

import {clearForm} from './domManip';

let toDoArray = [];



export function createTodo(title, description, dueDate, priority, notes, checklist){
       
        let Title = document.getElementById('Title').value;
        let Description = document.getElementById('Description').value;
        let DueDate = document.getElementById("DueDate").value;
        let Priority = document.getElementById("Priority").value;
        let Notes = document.getElementById("Notes").value;

        
        if(Title == "" || Description == "" || DueDate == ""){
                alert("Please enter a valid input");
                return;
        }

        if(parseISO(DueDate) < startOfToday()){
                alert("You have entered a date that has already passed!")
                console.log("due date", parseISO(DueDate))
                console.log("date now", startOfToday());
                return;
        }

        const nodeListChecklist = document.querySelectorAll('li');
        let checklistArr = []
        for(let i = 0; i < nodeListChecklist.length; i++){
                
                let strippedChecklist = nodeListChecklist[i].textContent.replace("\u00D7", "");
                checklistArr.push(strippedChecklist);
        }

        let CheckList = checklistArr.join(", ");
        toDoArray.push({Title, Description, DueDate, Priority, Notes, CheckList});
        console.log(toDoArray);

        clearForm();

        return {title, description, dueDate, priority, notes, checklist};
}