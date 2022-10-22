/** Control Flow:
 * 
 * 0. As we write code, we utilize a concept called "control flow" to direct our compileror interpreter
 * as it moves through our code. This control flow is governed by a few commonly used control flow
 * statements, which will be explained below. 
 * 
 * 
 */

//1 "If" statement

//An if statement causes a block of code to execute "if" a condition is met. Below, a string is logged
//to the console only if a conditionis met.

//this if statement logs 'Two is more than one'
if ((2 > 1) === true) {
    console.log('Two is more than one')
}

//this if statement does nothing
if ((100 < 1) === true) {
    console.log('Two is less than one hundred!')
}

//2. "Else If" statement

//If a preceding "If" statement's condition was not met, a subsequent "Else If" statement can then be run.

//the if statement's condition is not met, logging nothing
if ((100 < 1) === true) {
    console.log('Two is less than one hundred!')
}

//prior if statement condition was not met, allowing for else if block
else if ((100 < 1) === false) {
    console.log('No way')
}

//3. 'Else' statement

//Finally, an else statement may be used after preceding if and else if blocks. This will executeif previous blocks did not.

let x = 100

//condition not met...
if x < 100 {
    console.log('x is less than 100')
}

//condition still not met...
else if x > 100{
    console.log('x is greater than 100'')
}

//else statement executes
else {
    console.log('x must equal 100!')
}

//4. Switch statements

//Though lesser used, these allow us to 'switch' a certain occurence of a value, called a case, into
//a new output value.


//we pass the switch statement a variable, which could have any value. Then we subject it to an evaluation.
//Output is determined by cases.
let x = false

switch (x) {
    default:
        output = 'x is not a boolean value'
        break
    case true:
        output = 'x is true'
        break
  case false:
        output = 'x is false'
        break
}

//console logs 'x is false' after switch statement is run.
console.log(output) 


