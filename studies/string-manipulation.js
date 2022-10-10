/** String Manipulation:
 * 
 * 0. Strings are data types in Javascript consisting of alphanumeric characters places together. We have various methods
 * with which to alter them, which will be listed and explained below.
 * 
 * 
 */

//1. Length

//Accessing and being aware of the length property of a string is foundational to many manipulation methods.
//While it is not a method of manipulation itself, understanding it is vital.
//Here we print a string's length to the console:

let exampleString = 'This is the example'
console.log(exampleString) //prints 19 to the console. Spaces are characters.

//2.0 Manipulation by Operator
//We can manipulate strings somewhat similary to how we might manipulate numbers, but with key differences. Here are some
//examples.

var exampleVar;
exampleVar = 'string' //the assignment operator is used to assign the string to a variable

'string' + 'other string' //this yields 'stringotherstring'

exampleVar += 'string' //the uncrement/assignment operator here creates 'stringstring'

//3.0 Manipulation Methods
//Here we list some of the various methods for manipulating strings:
//
//3.1 Slice
//The slice method takes a 'slice' out of a string for us once passed an inclusive 'start' argument and an
//exclusive 'end' argument. Since it doesn't modify the original string, it is considered non-destructive.

console.log(exampleString.slice(0, 4))  //Prints 'This' to the console (see exampleString at line 15)

//3.2 Split
//The split method seperates the characters in a string into an array, where they can be more easily accessed or
//modified. The split argument takes an argument which indicates where the string is to be 'split' into indexed
//elements of an array.

exampleString.split(' ') //The passed space character will create ['This', 'is', 'the', 'example']
exampleString.split('') //This will create an array with every character of the passed string separated

//3.3 Concat
//The concat method joins two strings, similar to the "+" arithmetic operator. The method is passed a parameter to 
// place inbetween the concatenated strings. As with split, an empty string concats the strings directly.

let exampleStringTwo = 'which is now longer!'
let concatExample = exampleString.concat(', ', exampleStringTwo) //creates 'This is the example, which is now longer!'

//3.4 Trim
//The trim method helps us remove whitespace from a string, like so:

let pigsExample = "               pigs in space!               "
console.log(pigsExample.trim) //prints 'pigs in space!'

//the trimStart() and trimEnd() methods can also be used to trim just the start and end of a string.

//3.5 PadStart and PadEnd
//Similar to trim, but these methods add a character to the beggining or end of a string. The methods accept a number
//argument indicating the number of characters to be padded and the pad character itself. This method is useful to
//assure that a string maintains a uniform length, and is sometimes used with numbers.

let newExample= '55'
console.log(newExample.padStart(4, '0')) //prints 0055, filling in excess length over passed string's length with the value of
//the method's second argument.

//3.6 charAt
//We can pass this method an index value and get it to return the corresponding character.
console.log(newExample.charAt(0)) //returns '5'

//3.7 charCodeAt
//Similar to charCode, this accesses the unicode value of the character. Javascript uses the UTF-16 standard
//for organizing its characters.

console.log(newExample.charCodeAt(0)) //returns '53', the index unicode has assigned to the number 5.

let charCodeExample = 'Unicode!'

console.log(charCodeExample.charCodeAt(7)) //returns 33, the index number where unicode stores the '!' symbol.

//We've gone over several common Javascript string methods, but there are many others. We can even create our own!





