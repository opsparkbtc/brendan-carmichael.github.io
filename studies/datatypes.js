/**
 * DATA TYPES:
 * 
 * 0. In Javascript, we work with several different data types. These include integers, strings, boolean values, objects
 * and others. Understanding these data types and what we can and can't do with them is essential. Each data type has
 * properties specific to it, and methods which can be used with that datatype.
 * 
 */

//1. Numbers
// A number is any number. for instance:
3  //this is a small number
100000000000 //this is a pretty big number
2.444554554545 //this is a number with a lot of decimal places!

let x = 3 + 100000000000 + 2.444554554545
console.log(x) //this prints all of our numbers added together!

//2. Strings
//Strings are a series of characters. We indicate strings by placing them in single or double quotation marks.
'Hey man' //this is a string
'abcdefghijklmnopqrstuvwxyz' //this is also a string
'A' //this is a string with just one letter
' ' //this is a string with just one space
'' //this string is empty, but it's still a string
'5'//this is a string, not a number! It's the text character we use to represent five, but it isn't the number 5.

//3. Booleans
//A Boolean value is either true or false.
console.log(2 + 2 === 5) //this logs false. 2+2 does not equal 5, so the expression evaluates to false.
console.log(2 > 1) //The opposite is true here.

//4. Arrays
//Arrays are data structures used to hold a list of values. Arrays can hold strings, numbers, and even other arrays.
let exampleArray = ['dog', 'cat', 1, 2, false, ['rat', 'bat']] //this is an array with some stuff in it!
//An array always uses brackets.
let secondExampleArray = [] //Here's an empty array.

//5. Objects are data structures which hold key/value pair. Each key has a name and a value assigned to it. That value can be
//a number, string, array, function, or even another Object. Here is a sample object:
let exampleObject = {
                     firstkey: 'rectangle',
                     secondkey: 'triangle',
                     thirdkey: 'circle',
                    }
//Here's a more complicated object:
let secondExampleObject = {
                           firstKey: 1,
                           secondKey: ['dog', 'cat', 1, 2, false, ['rat', 'bat']],
                           thirdKey: {
                            firstkey: 'rectangle',
                            secondkey: 'triangle',
                            thirdkey: 'circle',
                           },
                           fourthkey: () => {console.log('This object has too much stuff in it')};
              
}

//Objects are indicated by curly braces.

//6.Function
//A function is a piece of code that executes a task or makes a calculation for us. Functions can have a very
//wide variety of inputs, outputs and uses. Here are some examples.

function Cheeser(name) {
    console.log('Say Cheese, ' + name + '!')
}

//6.1 Parts of a function
//The above function is declared using "function". Then we name the function Cheeser, and create its parameter
//inside parenthesis(name). A function can take multiple parameters, but ours only has one. Parameters are
//pieces of information the function accepts in order to execute its task or make its calculation.
//Next, we use the function body to make the function do something.
//In this case, the function accepts a name as a parameter. It then asks that person to Say Cheese by printing to the console.
//
//6.2 Completed Function
//Here is what the function looks like when used. We fulfill the parameters with the item in parenthesis:
Cheeser('Garfield') //This prints 'Say Cheese, Garfield!' to the console. Hopefully Garfield complies.

//7. undefined
//If we try to make javascript access something which has no value, we get 'undefined'.
var abc;
console.log(abc) //Returns undefined, since we have not assigned 'x' any value yet.


//8. null
//Similar to undefined. However, null indicates an intentional abscence, rather than not being able to detect a value.
//Undefinedis similar "I don't know", whereas null is similar to "Does not exist"

//9. NaN
// NaN means "Not a number". It is used by Javascript to indicate that a value which should be a number is not. 

//10. Infinity and -Infinity
//These datatypes represent the farthest and lowest bounds accessable by numbers in Javascript. There actually
//are limits! Once exceeded, we reach Infinity or -Infinity. 

//11. Primitive/Simple vs Complex Data Types
//Primitive, or Simple datatypes each have one value. However, a complex datatype represents multiple individual pieces of data.
'Hey!'//Simple
1 //Simple
false //Simple
['Hey', 1, false] //Complex

//12. By copy vs by reference
//In Javascript, data is either accessed via copy by value or copy reference.

//12.1 Copy by value.
//Copy by value is used for simple data types:
x = 'Hey'
y = x
y = 'Wait'
console.log(x) //Returns 'Hey'. y copied x's value, but did not alter the original x.

//12.2 Copy by reference
//Used for complex data types.
x = ['22', '33', '44', '55']
y = x
y.push('Bazooka')
console.log(x) //logs the array assigned to X with 'Bazooka' added to it. Because y is a reference to x, when we push an item to
//y, we also push it to X. 
 










