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
        var doneItem = prompt(`Which item would you like to delete?\n \
        You may enter the entry itself, or its index.`)
        if (Number.isInteger(Number(doneItem)) && Number(doneItem) < todos.length){
            console.log("Todo #" + doneItem + ": '" + todos[doneItem] + "' removed from list")
            todos.splice(doneItem, 1)
        } 
        else {
        //else, doneItem is an entry
            console.log("Todo #" + todos.indexOf(doneItem) + ": '" + doneItem + "' removed from list")
            var todos = todos.filter(function(item){
                return item !== doneItem
            });
            
        }
    }
}

//exit app
console.log("Goodbye");