import {createTodo} from "./createTodo.js";
import {defaultProjectLoad} from "./defaultProjectLoad.js";
import {domManip} from "./domManip.js";
import './styles.css'
defaultProjectLoad();

domManip();


let clickedModules = () => {

    const addNewTodo = document.querySelector(".submit-button");
    addNewTodo.addEventListener("click", displayForm);

    const addToChecklist = document.querySelector("#add-to-checklist");
    addToChecklist.addEventListener('click', addItemToCheckList);

    const resetButton = document.querySelector(".reset-button");
    resetButton.addEventListener("click", clearForm)
    

}


const todo1 = createTodo("afssf", "gggggg grovecer", "5/3/3")
console.log("show properties from todo", todo1);