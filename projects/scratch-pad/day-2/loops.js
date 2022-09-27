// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //looping and logging each element
  for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //looping backwards and logging each element
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
    }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //Using Object.keys method to make an array of the keys
  let arrayOfKeys = Object.keys(object);
  //Returning the array
  return arrayOfKeys;
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //Using Object.keys method to create array
  let arrayOfKeys = Object.keys(object)
  //looping through array
  for (let i = 0; i < arrayOfKeys.length; i++) {
  //logging array elements  
    console.log(arrayOfKeys[i])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //Creating array and looping through object to append array  
  let landingArray = []
    for (var i in object) {
      if (object.hasOwnProperty(i)) {
      landingArray.push(object[i])
    }
    }
    //returning Array with object values appended to it
    return landingArray;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //Looping through object and printing the values  
  for (var i in object) {
      if (object.hasOwnProperty(i)) {
      console.log(object[i])
    }
    }
    
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //Using .entries method to create array of key/value pairs
  let arrayOfElements = Object.entries(object)
  //Creating new variable bound to length of arrayOfElements
  let objectLength = arrayOfElements.length;
  //returning the number of key/value pairs
  return objectLength
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //Using Object.kvalues method to create array
  let arrayOfValues = Object.values(object)
  //looping through array
  for (let i = arrayOfValues.length - 1; i >= 0; i--) {
  //logging array elements  
    console.log(arrayOfValues[i])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
