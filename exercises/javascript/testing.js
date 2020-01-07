function testFunction(func, parameters){
    // Tests a functions return value
    console.log("Testing " + func.name)
    for (i=0; i<parameters.length; i++){
        console.log(func.name + "(" + parameters[i] + ") = " + func(parameters[i]))
    }
    console.log("====================")
}
