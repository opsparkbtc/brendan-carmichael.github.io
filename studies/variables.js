/**
 * VARIABLES:
 * 
 * 0. A variable is a shorter way of accessing a longer piece of data. A variable is a short series of characters
 * that we can assign a value, such as a string, number, array, or object. 
 * 
 * 1. We create variables by typing "var" followed by the variable name.
 * 
 * 2. Variables have two phases: a declaration and an initialization, which we'll check out below.
 * 
 */

//1.1 Declaration 
//In this phase, we establish the variable. It has no value yet:
var declaration;
console.log(declaration);// this line prints "undefined" to the console.

//1.2 Assignment
//After declaration, we can assign a value to a variable.
var declaration = 'This is the value!'
console.log(declaration) //This prints "This is the value!" to the console.

//The following two examples both declare and assign a variable:
let declarationTwo = 'This is a value via let'
console.log(declarationTwo) //prints to the console
const declarationThree = 'This is a value via const'
console.log(declarationThree) //also prints to the console

//1.3 Reassignment
//Once declared, variables can have their values changed via reassignment.
declaration = "Wait, this is different!"
console.log(declaration)

//2.1 Let and Const 

//To initialize and declare a variable, we can also use "let" or "const" instead of "var". We can also
// declare and assign at the same time by placing an equals sign and the value immedietly after the declaratio.
//a "const" or constant must be initialized this way.
let letVar = 'Example!'
const constVar = 'Another example!';

//2.2 Let
// "Let" is similar to "Var", but it is blocked scoped. This means it is only accessable within its own block of code.
for (i = 0; i <= 10; i++) {
    let exampleLet = 0
    exampleLet += i
    console.log(exampleLet)  //this logs 0-10 as the for loop adds to exampleLet
}
console.log(exampleLet) //this throws an error because let variables are block scoped.

//If we just change 'let' to 'var', the second console.log would log 10! Let allows us to be more precise with our code.

//2.3 Const
//Const variables are block scoped like Let, but they can't be changed. Const means Constant!
let exampleLet = 0
exampleLet = 1 //We can reassign exampleLet without issue

const exampleConst = 'Not gonna change!'
exampleConst = 'Change!' //This gives us an error

//3.0 Hoisting
//Hoisting is a process where parts of our code are brought to the top of their scope before other pieces of code, even if
//they appear later in our code. 'Var' variables are hoisted with their initializations but not their assignments. 'Let' and
// 'Const' are hoisted but not initialized.
console.log(varHoistExample) //console prints 'undefined', as var is declared but not assigned.
console.log(letHoistExample) //error!
console.log(constHoistExample) //also error!
var varHoistExample = 'This is the first example'
let letHoistExample = "This is another example"
let constHoistExample = "this is an example too"

//Thank you, you've been a beautiful audience.


