
export function defaultProjectLoad(){

    console.log("Called this module");
    let projectArray = [];
    console.log("push to array");
    let projectTitle = "Default Project blah bla blah";
    projectArray.push({projectTitle});
    console.log(projectArray);
    return {projectArray, projectTitle}
}