var todos = ["Buy New Turtle", "Feed New Turtle"];

while(input !== "quit"){
    var input = prompt("What would you like to do?");
    
    if(input === "list"){
        //list items
        console.log("Here is your todo list:")
        todos.forEach(function(item, i){
            console.log(i + ": " + item)
        });
        console.log("======================");
    } 
    else if(input === "new") {
        //add item to list
        var newItem = prompt("Enter new todo:");
        todos.push(newItem);
        console.log(newItem + " added to list");
    }
    else if(input === "delete"){
        var doneItem = prompt("Which item would you like to delete?")
        var todos = todos.filter(function(item){
            return item !== doneItem
        });
        console.log(doneItem + " removed from list")
    }
}

//exit app
console.log("Goodbye");