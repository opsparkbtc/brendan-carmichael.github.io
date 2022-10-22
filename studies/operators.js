/** OPERATORS:
 * 
 * 0. Operators are symbols which we can use to perform actions on pieces of data called operands, which themselves are either 
 * variables or values. Operator use is a crucial fundamental aspect of Javascript.
 * 
 * 0.1 There are several types of operators, which will be listed and explained below.
 */

//1.0 Assignment Operators
//We use assignment operators to assign values to variables. 

// = Assignment Operator: Assigns a value to a variable
//
//Here, we assign 10 to a variable named exampleVariable

let exampleVariable = 10

// +=, -=, *=, /=, %=, **= :  These six  both perform arithmetic operations and assign a value
//
//Below, our exampleVariable will now equal 12:

exampleVariable += 2

// ‘X=’ is the formula, with X being the arithmetic operator to be performed along with the assignment.

//2.0 Arthmetic Operators
//These perform mathematical operations. They are:

// Addition
// Subtraction
// ‘ * Multiplication
//  /  Division
// % Remainder/ Modulo
// ++ Increment
// ‘- -’ Decrement
// ** Exponentiation

//Below, the arithmetic operator adds two values:
(2 + 2) 

//3.0 Comparison Operators 
//These are used to compare data. They return true or false!
//
// >  Greater Than                                               
// >= Greater Than or Equal To
// <   Less Than                                                  
// <= Less Than or Equal To
// == Equals, which compares value across data types
// === Strictly Equals which compares value accounting strictly for data type
// != Not Equal
// !==Not Strictly Equal

console.log(10 > 2) //prints true
console.log(10 < 10) //printsfalse
console.log(10 <= 10) //prints true

//4.0 Logical Operators
//These evaluate to True or False, and help us make more complex expressions.

//&& and
//|| or
//! not

console.log((10000 > 1) && (2 > 3))
//prints false, as the && operator indicates both expressions must evaluate to true.

console.log((2000 < 2) || (7 === (14 / 2) ))
//prints true, as either statement can be true. The first expression evaluates to false, but the other evaluates to true.


//5.0 Unary Operators
//Unary operators operate on one value. Some examples are below:

//5.1 Bang operator
// The '!' or bang operator, also a logical operator, indicates 'not'.

console.log(!(10 > 2)) //Since ten is greater than two, the expression evaluates to true. The bang operator then creates
// 'not false', or true, and prints 'false' to the console.

//5.2 typeof
//the typeof operator returns an assessment of a string's value.

console.log(typeof 99) //returns 'number'

//5.3
//Unary plus (+) and Unary negation (-)
//
//These convert their operands to positive or negative numbers.

let x = '5'
console.log(x) //prints the string '5'
console.log(+x) //prints the number (not the string) 5.
console.log(-x) //prints the number -5

//The decrement (--) and increment (++) operators, found often in our for loops, are also unary operators.

//5.4 Ternary Operators
// The ternary operator in Javascript is similar to an is/else statement. It receives an input and 
//executes one of two outputs depending upon if the condition is true of false (or more accurately, "truthy"
//or "falsey")

let number = 25
let ternaryExample = (number > 20 ? "Over 20!" : "Not over 20!") //logs the first string as number's value, 25,
// is greater than 20.







