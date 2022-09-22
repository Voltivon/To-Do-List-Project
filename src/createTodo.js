let toDoArray = [];



export function createTodo(title, description, dueDate, priority, notes, checklist){
        console.log("called todo module");
        
        toDoArray.push({title, description, dueDate, priority, notes, checklist});
        console.log(toDoArray);

        return {title, description, dueDate, priority, notes, checklist};

        


}