import {createTodo} from "./createTodo.js";
import {defaultProjectLoad} from "./defaultProjectLoad.js";
import {domManip, displayTheForm, addItemToChecklist, clearForm} from "./domManip.js";
import './styles.css'
defaultProjectLoad();

// domManip();


let clickedModules = (function() {

    const addNewTodo = document.querySelector(".add-todo-button");
    addNewTodo.addEventListener("click", displayTheForm);

    const addToChecklist = document.querySelector(".add-new-item");
    addToChecklist.addEventListener('click', addItemToChecklist);

    const resetButton = document.querySelector(".reset-button");
    resetButton.addEventListener("click", clearForm)

    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener("click", createTodo)
    

})();


const todo1 = createTodo("afssf", "gggggg grovecer", "5/3/3")
console.log("show properties from todo", todo1);