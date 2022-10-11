// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //returning a function that takes in an input (thing) and returns the boolean value of thing > base
    let greaterFilter = (thing) => (thing > base);
    return greaterFilter

    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //returning a function that takes in an input (thing) and returns the boolean value of thing < base. 
    return (thing) => (thing < base)
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //returning a function that takes in an input string to check (stringToCheck) and returns boolean value of
    //whether the string's first letter (index 0) matches a passed in character(startsWith). toLowerCase used.
    return (stringToCheck) => (stringToCheck[0].toLowerCase() === startsWith.toLowerCase())
   
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //returning a function that takes in an input string to check (stringToCheck) and returns boolean value of
    //whether the string's last letter (index.length - 1) matches a passed in character (endsWith). toLowerCase used.
    let endChecker = (stringToCheck) => (stringToCheck[stringToCheck.length - 1].toLowerCase() === endsWith.toLowerCase())
    return endChecker;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //open a holding array
    let modified = [];
    //loop through passed-in array
    for (let i = 0; i < strings.length; i++)
      //push elements to holding array once callback function has been called on the iterated-through 
      //elements of the passed in array
      modified.push(modify(strings[i]))
      //return the holding array we opened at the beginning
      return modified;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //Going to loop through and modify a variable if any of strings[i] don't pass, then return the variable.
    let falseFlagger = 0;
    for (let i = 0; i < strings.length; i++) {
      if (test(strings[i]) === false) {
        falseFlagger += 1;
      }
    } if (falseFlagger === 0) {
        return true;
    } else {
        return false}
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
