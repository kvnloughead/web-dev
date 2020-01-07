function printReverse(arr){
    var reversed = arr[arr.length - 1].toString()
    for (var i = arr.length-2; i >= 0; i--){
        var reversed = reversed.concat(" " + arr[i].toString())
    }
    console.log(reversed)
}

// printReverse(['1', '2', '3'])
// printReverse([[1,2],3])
// printReverse(["a", "b", "c"])

function isUniform(arr){
    // Returns true if all elements in arr are the same
    var a0 = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] !== a0){ 
            return false
        }
    }
    return true
}

// console.log(isUniform([1 , 1, 1])) // true
// console.log(isUniform(['c', 'c', 'c'])) // true
// console.log(isUniform([1 , 1, 2])) // false
// console.log(isUniform([1 , 1, 2])) // false
// console.log(isUniform([1 , 2, 2])) // false
// console.log(isUniform([1 , 2, 2])) // false
// console.log(isUniform([1 , '1', 1])) // false
// console.log(isUniform(['a', 'b', 'c'])) // false

function sumArray(numbers){
    // numbers: an array of numbers.
    // returns sum of numbers.
    var sum = 0;
    numbers.forEach(function(num){
        sum += num
    });
    return sum
}

// console.log(sumArray([1,2,3]))
// console.log(sumArray([3.14, 3.14]))
// console.log(sumArray([3.14, -3.14]))
// console.log(sumArray([4,5,6]))

function max(numbers){
    // Returns maximum of an array of numbers
    var maxNum = numbers[0];
    for (i = 1; i < numbers.length; i++){
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        };
    }
    return maxNum
}

// ===================================//
// ------ Build-your-own forEach ----- //

function myForEach(arr, func) {
    for (var i = 0; i < arr.length; i++){
        func(arr[i]);
    }
}

var colors = ["red", "orange", "yellow"]

myForEach(colors, function(color){
    // the argument of the anonymous function corresponds to arr[i]
    console.log(color);
});

// add as method to Array.prototype

Array.prototype.myForEach = function(func){
    for (var i = 0; i < this.length; i++){
        func(this[i]);
    }
}

console.log("Doing this again:")

colors.myForEach(function(color){
    console.log(color);
})





