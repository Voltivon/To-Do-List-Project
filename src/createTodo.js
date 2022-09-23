import {compareAsc, format, parseISO, startOfToday} from "date-fns";
import { saveToDoLocal } from "./manageLocalStorage";
import {clearForm} from './domManip';

let toDoArray = [];



export const createTodo = () => {
       
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

        console.log("called createTodo module");
        console.log({Title, Description, DueDate, Priority, Notes, CheckList})
        console.log("pushing this object to array")
        toDoArray.push({Title, Description, DueDate, Priority, Notes, CheckList});
        console.log(toDoArray);

        saveToDoLocal({Title, Description, DueDate, Priority, Notes, CheckList});

        clearForm();

        return {Title, Description, DueDate, Priority, Notes, CheckList};
}