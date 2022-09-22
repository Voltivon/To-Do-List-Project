import { defaultProjectLoad } from "./defaultProjectLoad";

export function domManip(){

    // Heading
    const contentDiv = document.querySelector("#content-div")
    const todoHeader = document.createElement("h1");
    todoHeader.textContent = "Todo-Webapp"
    contentDiv.appendChild(todoHeader);

    // initial dom load

    const projectIniitalLoad = document.createElement("div");
    projectIniitalLoad.textContent = defaultProjectLoad().projectTitle;
    contentDiv.appendChild(projectIniitalLoad);
}