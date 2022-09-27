// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    //return the length of the string that was inputted
    let returnLength = string.length;
    return returnLength;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    //returning a string modified with toLowerCase
    return string.toLowerCase();



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //returned a string modified with toUpperCase method
    return string.toUpperCase()


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //Taking an input string and returning it lowercased with dashes instead of spaces
    //making string lowercase:
    let lowerString = string.toLowerCase();
    //splitting string into array so that it can be joined with dashes replacing spaces
    let splitString = lowerString.split(' ');
    //Now that string is an array, will join elements with dash as substitute for spaces
    let dashedString = splitString.join('-')
    return dashedString;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //Converting string to Array and then checking value of array's first index
    let lowered = string.toLowerCase();
    //Splitting string
    let holdArray = lowered.split('');
    //check with 'if' statements
    if (holdArray[0] === char.toLowerCase()) {
        return true;
    } else {
        return false;
    }
    

    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
// YOUR CODE BELOW HERE //
    //Converting string to Array and then checking value of array's last index
    //Getting string's last index value
    let lengthIndex = string.length - 1; 
    //Lowercasing string to ensure case insensitivity
    let lowered = string.toLowerCase();
    //Splitting string
    let holdArray = lowered.split('');
    //check with 'if' statements
    if (holdArray[lengthIndex] === char.toLowerCase()) {
        return true;
    } else {
        return false;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //Creating new variable to hold two concatenated strings
    let concatString = stringOne + stringTwo;
    //returning variable for concated strings
    return concatString;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    //joining args array to create string
    let joinedVar = args.join('')
    //returning string
    return joinedVar;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //using .length property to check string
    if (stringOne.length > stringTwo.length) {
        return stringOne;
    } else {
        return stringTwo;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //setting a variable and then using localeCompare. Placing results in a variable for clarity.
    let final = 0;
    //Comparing using the localeCompare method
    let comparisonResult = stringOne.localeCompare(stringTwo);
    //The results need to be reversed. Requested output is opposite the output of localeCompare method.
    if (comparisonResult === -1) {
        final = 1;
    } else if (comparisonResult === 1) {
        final = -1
    } else {
        final = 0
    }
    //returning result
    return final;
    // YOUR CODE ABOVE HERE //
};

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //creating variable to store output
    let final = 0;
    //calling method
    let comparisonResult = stringOne.localeCompare(stringTwo);
    if (comparisonResult === -1) {
        final = -1;
    } else if (comparisonResult === 1) {
        final = 1
    } else {
        final = 0
    }
    //returning variable
    return final;
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
