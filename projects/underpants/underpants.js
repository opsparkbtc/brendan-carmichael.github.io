// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    //Just return the parameter
    return value
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    //Check for array first, since the array/object distinction is at play
    if (Array.isArray(value) === true) {
        return 'array'
    //check for null
    } else if (value === null) {
        return 'null'
    } else {
    //typeof operator handles remaining conditions
    return typeof value
    }
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    //set empty array
    let emptyArray = []
    //check to make sure there is an array and number isn't negative
    if (Array.isArray(array) === false || (number < 0)) {
        return emptyArray;
    //eliminate non-numbers
    } if (typeof number !== 'number') {
        return array[0]
    //loop through array, stopping at the parameter
    } if ((number >= 0) && (number <= array.length)) {
        for (let i = 0; i < number; i++) {
            //push the iterated elements into emptyArray
            emptyArray.push(array[i])
    }
   }
   //final check for a number parameter longer than the array 
   else if ((number >= 0) && (number > array.length)) {
     return array
   }
   //return the array
   return emptyArray
}
    




/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
    //set empty array
    let emptyArray = [];
    //check to make sure there is an array and number isn't negative
    if (Array.isArray(array) === false || (number < 0)) {
        return emptyArray;
    //eliminate non-numbers
    } if (typeof number !== 'number') {
        return array[array.length - 1]
    //loop through array backwards, starting at parameter and ending at 0
    } if ((number >= 0) && (number <= array.length)) {
        for (let i = array.length - 1; i >= array.length - number; i--) {
            //unshift the iterated elements into emptyArray
            emptyArray.unshift(array[i])
    }
   }
   //final check for a number parameter longer than the array 
   else if ((number >= 0) && (number > array.length)) {
     return array
   }
   //return the array
   return emptyArray
}



/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function (array, value){
    // creating loop to through the array
     for(let i = 0; i <= array.length - 1; i++){
    //creating if statement that returns the index of array if it truly equals value 
           if(array[i] === value){
  //    returning the index which equals value using includes 
    return i; 
        // returning negative -1 if array does not include value 
      } 
  }
     return -1; 
   }





/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    //set a counter which will trip later if our loop gives us a match
    let counter = 0  
    //loop through array
    for (let i = 0; i < array.length; i++) {
        //if we get a match, increment counter
        if (array[i] === value) {
          counter += 1
        }
     }
    //ternary operator returns true or valse depending on if we got a match
     return (counter > 0 ? true: false)
  }




/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
        //check for array
        if (Array.isArray(collection)) {
          //Since collection is an array, iterate through it
          for (let i = 0; i < collection.length; i++) {
            //call function on array elements
            func(collection[i], i, collection)
          }
        } else {
            //iterate with for in loop
            for (let key in collection) {
                //call function
                func(collection[key], key, collection)
            }
        }
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

/*

_.unique = function(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        _.unique(array)
    }
} 

*/




/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/



_.filter = function(array, func) {
    //open holding array
    let newArray = [];
    //proceed if a function has been passed
    if (func !== undefined) {
        //loop through array
        for (let i = 0; i < array.length; i++) {
            //if all parameters evaluate to true, push the array elements into the holding array
            if (func(array[i], i, array) === true) {
                    newArray.push(array[i])
                }
        }
    }
    //return the array of filtered elements
    return newArray
}






/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func) {
    //open holding array
    let newArray = [];
    //proceed if a function has been passed
    if (func !== undefined) {
        //loop through array
        for (let i = 0; i < array.length; i++) {
            //if all parameters evaluate to false, push the array elements into the holding array
            if (func(array[i], i, array) === false) {
                    newArray.push(array[i])
                }
        }
    }
    //return the array of filtered elements
    return newArray
}




/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func) {
    //initialzie two holding arrays
    let truthyArray = [];
    let falsyArray = [];
    //iterate through array
    for (let i = 0; i < array.length; i++) {
        //if calling function returns true, push to appropriate array
        if ((func(array[i], i, array)) === true) {
          truthyArray.push(array[i])
    //Since true is accounted for, all others must be false and are pushed to appropriate array
    } else {
        falsyArray.push(array[i])
    }
}
//create a final array and add the truthy and falsy arrays to it, then return
let combinedArray = [];
combinedArray.push(truthyArray, falsyArray)
return combinedArray
}



/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func) {
    //initialize containing array
    let newArray = [];
    //check that collection is an array
    if (Array.isArray(collection)) {
        //iterate through array
        for (let i = 0; i < collection.length; i++) {
          //call function and push elements to new array
          newArray.push(func(collection[i], i, collection))
        }
    //if array is not an array, return false
    } else if ((Array.isArray(collection)) === false) {
        //access object with for/in loop
        for (let key in collection) {
            //call function and push elements to new array
            newArray.push(func(collection[key], [key], collection))
        }
    }
      return newArray
    }
    
    



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arrayOfObjects, property) {
    //initialize containing array
    let returnArray = [];
    //iterate through array
    for (let i = 0; i < arrayOfObjects.length; i++) {
        //use for/in loop to acces object properties
        for (let key in arrayOfObjects[i]) {
        //if desired property is present, push it to our containing
        if (key === property) {
            returnArray.push(arrayOfObjects[i][key])
        }
    }
  }
  return returnArray
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


_.every = function(collection, func) {
    //determine if func was not passed in
     if (func === undefined) {
        //determine if array
        if (Array.isArray(collection)) {
            //iterate and check for false
            for (let i = 0; i < collection.length; i++) {
             if (!collection[i]) {
               return false
             }
            }
        } 
        } else {
        //func was provided, determine if array
        if (Array.isArray(collection)) {
        //iterate through array
        for (let i = 0; i < collection.length; i++) {
            //determine if result of calling funcs on parameters is true
            if (func(collection[i], i, collection) === false) {
              return false;
            }
       }

     } else {
        //since it's an object, iterate through object keys
        for (let key in collection) {
            //if false, return false
            if (func(collection[key], key, collection) === false) {
                return false
            }
        } 
    
    }
} 
//finally, return true
return true
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/






/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
    //create result variable
    let result;
    //determine if seed value was not given a value
    if (seed === undefined){
      //assign result to first value of array  
      result = array[0];
      // iterate through input array
      for (let i = 1; i < array.length; i++){
        result = func(result, array[i], i, array)
      }
    
    } else {
        //assign result the value of seed
        result = seed;
        //iterate normally
        for (let i = 0; i < array.length; i++) {
            result = func(result, array[i], i, array)
        }
    }
    return result;
}



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object1, object2, ...object) {
    //set a new object as the return value of Object.assign. Use spread operator to accept arbitrary number of
    //additional arguments.
    let newObj = Object.assign(object1, object2, ...object)
    return newObj;
}





//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
