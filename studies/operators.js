/** Operators:
 * 
 * 0. Operators are symbols which we can use to perform actions on pieces of data called operands, which themselves are either 
 * variables or values. Operator use is a crucial fundamental aspect of Javascript.
 * 
 * 0.1 There are several types of operators, which will be listed and explained below.
 */

//1.0 Arthmetic Operators
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

//2.0 Assignment Operators
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
//prints false, as the && operator indicates both expressions must evaluate to true

console.log((10 < 2) || !(7 === 8 ))
//prints true, as either statement can be true. The first is false, but 7 === 8 evaluates to false, and the '!' indicates not
//false, or true.

//5.0 Others
//Javascript utilizes several other operator types, but discussion of these operators, such as the Bitwise operators, are
//beyond the current scope of the class.





