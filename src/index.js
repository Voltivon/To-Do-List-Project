import {createTodo} from "./createTodo.js";
import {defaultProjectLoad} from "./defaultProjectLoad.js";
import {domManip} from "./domManip.js";

defaultProjectLoad();

domManip();



const todo1 = createTodo("afssf", "gggggg grovecer", "5/3/3")
console.log("show properties from todo", todo1);