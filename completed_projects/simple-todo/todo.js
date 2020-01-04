var todos = ["Buy New Turtle", "Feed New Turtle"];

while(input !== "quit"){
    var input = prompt("What would you like to do?");
    
    if(input === "list"){
        //list items
        console.log(todos);
    } 
    else if(input === "new") {
        //add item to list
        var newTodo = prompt("Enter new todo:");
        todos.push(newTodo);
        console.log(newTodo + " added to list");
    }
}

//exit app
console.log("Goodbye");