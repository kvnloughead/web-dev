var todos = ["Buy New Turtle", "Feed New Turtle"];

while(input !== "quit"){
    var input = prompt("What would you like to do?");
    
    if(input === "list"){
        listTodos()
    } else if(input === "add") {
        addTodo()
    } else if(input === "delete"){
        var todos = deleteTodo(todos)
    }
}

function listTodos(){
    console.log("Here is your todo list:")
    console.log("----------------------");
    todos.forEach(function(item, i){
        console.log(i + ": " + item)
    });
    console.log("======================");
}
function addTodo(){
    var newItem = prompt("Enter todo to add to list:");
    todos.push(newItem);
    console.log(newItem + " added to list");
}
function deleteTodo(todos){
    var doneItem = prompt(`foo Which item would you like to delete?\n \
    You may enter the entry itself, or its index.`.replace(/  +/g, '')) //Dedents by removing all double spaces (and apparently tabs), from the resulting string. 
    if (Number.isInteger(Number(doneItem)) && Number(doneItem) < todos.length){
        console.log("Todo #" + doneItem + ": '" + todos[doneItem] + "' removed from list")
        todos.splice(doneItem, 1)
    } 
    else {
        console.log("Hi Todo #" + todos.indexOf(doneItem) + ": '" + doneItem + "' removed from list")
        var todos = todos.filter(function(item){
            return item !== doneItem
        });
    return todos
    }
}
//exit app
console.log("Goodbye");