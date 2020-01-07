var secretNumber = 4;

var guess = Number(prompt("Guess a number"))

while(guess !== secretNumber){

    if(guess < secretNumber){
        guess = Number(prompt("Too low.  Guess again!"))
    }
    else {
        guess = Number(prompt("Too high.  Guess again!"))
    }
}

if(guess === secretNumber){
    alert("That's correct!  You win.")
}