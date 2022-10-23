/**
 * FUNCTIONS:
 * 
 * A function is a defined block of code which takes an input and returns a related output. We use particular
 * keywords and formatting to define a function. Functions are a major fundamental building block of Javascript
 * and for programming languages in general.
 * 
 * Below, we will illustrate functions with examples.
 */

//1. Function declaration
//
//First, we DECLARE a function. We establish its name, its parameters, and its body.
function printDogType(dogType) {
    console.log(`One really cool type of dog is the ${dogType}.`)
}

//2. Calling a function
//Next, we CALL the function. We pass its parameter, <dogType>, an argument, which will have its value assigned to <dogType>

//the function's body executes, and prints 'One really cool type of dog is the Poodle'
printDogType('Poodle')

//3. We can declare a function one of three ways. The first is with the previously used method. The second is with a variable:

let printDogType = function(dogType) {
    console.log(`One really cool type of dog is the ${dogType}.`)
}

//We can also use the more efficient arrow notation, in which the 'function' word is implicit

let printDogType = (dogType) => console.log(`One really cool type of dog is the ${dogType}.`)

//4. Option parameters
//
//Additionally, functions may take optional parameters, which are served by defaults if not provided. Here, the
//function takes a number. If a second argument is passed to it, it multiplies the first number by that number. Otherwise,
//it defaults to multiplying it by the default parameter of 4

function exampleFunction1(number, number2=4) {
   return (number * number2)
}

console.log(exampleFunction1(3)) //prints 12
console.log(exampleFunction1(3, 100)) //prints 300

//Note also the "return" statement. This is a crucial component of many functions. Calling the function causes it to 
//'return' the given output. We can use the function in expressions, such as below:

//below, the console will print 'This is a string which has the number 88 in it' as the function's return value is 88
console.log(`This is a string which has the number ${exampleFunction1(8, 11)} in it`)

//5. Scope and closure
//
//Additionally, blocks of codes create 'scope' within Javascript. A block may access the value of a variable declared in
//any of the scopes from which it is declared (a 'parent scope' and 'child scope' relationship), but the opposite is not true.


//Below, the child scope will modify x in the parent scope and increment its value to 101. However, the parent scope can not
//increment y to 1000, causing an error.
function testFunction(number) {
    let x = 1
    if (number > 1) {
        let y = 2
        x += 100
    }
    y += 998
 console.log(x)
    console.log(y)
}


//6. Closure
//
//A closure is a functon that is 'enclosed' by its surrounding state while referencing that state. Below, the anonymous 
//function that multiplies x by y is an example of closure. After multiplier is called, it will retain x's value, even
// after its parent scope has closed.


function multiplier(x) {
    return function(y) {
        return x * y
    }
}

let superMultiplier = multiplier(5) //multiplier 'holds on' to x, which has been assigned the value of 5

console.log(superMultiplier(2)) //console logs 10. The 2 is multiplied by the retained value of 5.




