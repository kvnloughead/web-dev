var todos = ["Buy New Turtle", "Feed New Turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
    //handle input
    if(input === "list"){
        console.log(todos);
    } else if(input === "new") {
        //add to todo list
        var newTodo = prompt("Enter new todo:");
        todos.push(newTodo);
    }
    //request new input
    input = prompt("What would you like to do?");
}

//exit app
console.log("Goodbye");