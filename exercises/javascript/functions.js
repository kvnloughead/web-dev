function isEven(n){ 
    return n % 2 === 0;
}

function factorial(n){
    if (Number.isInteger(n) === false || n < 0){
        return "Positive whole numbers only!";
    };
    if (n === 0){
        return 1;
    }
    if (n === 1){
        return n;
    };
    return n * factorial(n-1);
};

function kebabToSnake(str){
    var newStr = str.replace(/-/g, "_");
    return newStr  
}

function printReverse(arr){
    var reversed = arr[arr.length - 1].toString()
    for (i = arr.length-2; i >= 0; i--){
        var reversed = reversed.concat(" " + arr[i].toString())
    }
    console.log(reversed)
}

function isUniform(arr){
    // Returns true if all elements in arr are the same
    a0 = arr[0]
    for (i = 1; i < arr.length; i++){
        if (arr[i] !== a0){ 
            return false
        }
    }
    return true
}

function sumArray(numbers){
    // numbers: an array of numbers.
    // returns sum of numbers.
    var sum = 0;
    for (i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum
}

function sumArray(numbers){
    // numbers: an array of numbers.
    // returns sum of numbers.
    var sum = 0;
    numbers.forEach(function(num){
        sum += num
    });
    return sum
}

console.log(max([1,2,3]))
console.log(max([3,2,1]))
console.log(max([3,3,3]))
console.log(max([1, -1, 0]))

//  ======================================= 

function testFunction(func, parameters){
    console.log("Testing " + func.name)
    for (i=0; i<parameters.length; i++){
        console.log(func.name + "(" + parameters[i] + ") = " + func(parameters[i]))
    }
    console.log("====================")
}

