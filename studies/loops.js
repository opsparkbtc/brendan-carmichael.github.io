/**
 * LOOPS:
 * 
 * A loop is a construct that allows us to iterate through a collection, such as an array or object, or
 * to continue to perform an action while a certain condition exists.
 * 
 * Below, we will illustrate loops with examples.
 */

//1. While loop
//
//This loop causes a piece of code to execute an unlimited number of times as long as a condition is met.

//Below, we assign a variable a value of 0
let x = 0

//Next we execute the subsequent code block until the while loop's condition is no longer true. The while loop
//will exist after 10 executions, as x will no longer be less than 10.
while (let x = 0 < 10) {
   x += 1
}



//2. For Loop
//
//This loop is used to iterate over an indexed data type. We assign it a starting initializer, a stopping condition, and 
//an iteration value to determine the type of incrementation or decrementation

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//this "forward" for loop starts at index 0, ends before reaching an index equal to testArray's length, and increments by one.
for (let i = 0; i < testArray.length; i++) {
    console.log(testArray[i])
    }


//this "backwards" for loop starts at index 9 (one less than testArray's length), ends at 0, and decrements by one
for (let i = testArray.length - 1; i >= 0; i--) {
    console.log(testArray[i])
  }

//3. For In Loop
//
//As objects are not indexed the way arrays or strings are, we use a for in loop.

let testObject = {firstkey: 'one', secondkey: 'two', thirdkey: 'three'}

//this loop looks for the keys in our test object, and then executes the block of code for each, logging their values.
for (keys in testObject) {
    console.log(testObject[keys])
}

