// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

var factorial = function(n, fact = 1) {
  //check for null
  if (n < 0) {
    return null
  } else {
  //base
  if (n === 0){
  return fact;
  }
  //recursion
  fact *= n;
  //return 
  return factorial(n - 1, fact);
};
}


// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

var sum = function(array, sumV=0) {
  //check for 0 base case and return
  if (array.length === 0) {
    return sumV
  //return and slice array down to get next value
  } else {
    sumV += array[0]
    //make recursive call
    return sum(array.slice(1), sumV)
}
}


// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15

var arraySum = function(array) {
};


// 4. Check if a number is even.
var isEven = function(n) {
  if (n >= -1) {
  if (n === 0) {
    return true
  } else if (n === -1) {
    return false
  } else { 
    return isEven(n - 2)
  }
  }
  else if (n < -1) {
  if (n === 0) {
    return true
  } else if (n === -1) {
    return false
  } else { 
    return isEven(n + 2)
  }
  }
};


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

var sumBelow = function(n, counter=0) {
  //checks for positive number or zero
  if (n >= 0) {
  //base case hit when n is zero
  if (n === 0) {
  return counter
} else {
  //add sum to counter and decrement both variables to count
  //all numbers between n and zero. End recrusion when n is zero. 
  counter += (n - 1)
    return sumBelow(n - 1, counter)
}
} //checks for negative number
  else if (n < 0) 
  //base case hit when n is zero
  if (n === 0) {
  return counter
} else {
  //add sum to counter and increment both variables to count
  //all numbers between n and zero. End recrusion when n is zero. 
  counter += (n + 1)
    return sumBelow(n + 1, counter)
  }
}


// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

var range = function(x, y, counter=[]) {
  //if no integers in range, return empty array
  if (x === y) {
    return counter
  }
  //check to see if x is smaller
  if (x < y) {
  //base case reached when x been incremented to equal y minus 1
  if (x === y - 1) {
     return counter
   } else {
     //make recursive calls incrementing x
     counter.push(x + 1)
     return range(x + 1, y, counter)
  }
  //else defaults to y being smaller
  } else {
    //base case reached when x has been deccremented to equal y + 1
    if (x - 1 === y) {
     return counter
   } else {
     //make recursive calls decrementing x
     counter.push(x - 1)
     return range(x - 1, y, counter)
  }
}
}


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = function(base, exp, counter=base) {
  //counter retains base's original value.
  //base case is when exp has single level of exponentation.
  if (exp > 0) {
  if (exp === 1) {
    return base
  } else {
    //exponentiate base, decrements exp and make recursive call
    base = base * counter
    return exponent(base, exp - 1, counter)
  }
} //implement case for negative exponent
  else if (exp < 0) {
  if (exp === -1) {
    //alter to negative
    return (1 / base)
  } else {
    //exponentiate base, incrementexp and make recursive call
    base = base * counter
    return exponent(base, exp + 1, counter)
  }
  
  }
  //catches the instance when exp is 0
  else {
    return 1
}
}


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

var powerOfTwo = function(n) {
  //if dividing n by 2 reaches 1, n is a power of 2 and returns true
  if (n === 1) {
    return true
  //if dividing by 2 overshoots 1, false is determined. The only number less than 2 that is a power of 2 would
  //be the 1 caught by the previous if statement
  } else if (n < 2) {
    return false
  } //make recursive calls to the function, dividing by two each time 
  return powerOfTwo(n / 2)
};


// 9. Write a function that accepts a string and reverses it.
var reverse = function(string, holder='', counter=string.length - 1) {
  //base case is when holder is length of string, indicating reversal
  if (holder.length === string.length) {
    return holder
  } else {
    //add the index of the string to holder, then count down and recur
    return reverse(string, holder + string[counter], counter - 1)
  }
};


// 10. Write a function that determines if a string is a palindrome.

var palindrome = function(string, checkString='', index=string.length - 1) {
  //check if reversed string is complete and return true if 
  //palindrome. Use regex to remove spaces and toLowerCase to account for capitalization
  if (string.length === checkString.length && string.replace(/[\s]/g, '').toLowerCase()
   === checkString.replace(/[\s]/g, '').toLowerCase()) {
    return true
  }
  //return false if reversed string complete and not palindrome
   if (string.length === checkString.length && string.replace(/[\s]/g, '').toLowerCase()
    !== checkString.replace(/[\s]/g, '').toLowerCase()) {
    return false
  }
   checkString += string[index] 
   //call recursively, decrementing index to create backwards string
   return palindrome(string, checkString, index - 1) 
}



// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};


// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').

var multiply = function(x, y, holdValue=x) {
  
  if (y < 0) {
    
    if (y === -1) {
    return -x
  }   else {
      
      return multiply(x + holdValue, y + 1, holdValue)
 } 
} else  {
  
  if (y === 1) {
  return x
  
  } else if (y > 0) {
   
    return multiply(x + holdValue, y - 1, holdValue)
 }
} 
  return 0
}

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

var compareStr = function(str1, str2, counter=str1.length - 1) {
  //if mismatch is hit, return false
  if (counter >= 0) {
  if (str1[counter] !== str2[counter]) {
    return false
  } else {
    //call function recursively, decrementing counter until zero
    return compareStr(str1, str2, counter - 1)
  }
  } //cleanup for empty arrays 
  else if (counter < 0) {
    if (str1.length === str2.length) {  
      return true
} else {
    return false
    }
  }
}


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

var createArray = function(str, array=[], counter=0){
  //base case reached when array and str are same length
  if (str.length === array.length) {
   return array
 } else {
   //push first index of string into array
   array.push(str[counter])
   //recursive calls with counter incremented to advance index
   return createArray(str, array, counter + 1)
 }
};


// 17. Reverse the order of an array
var reverseArr = function(array, holder=[], counter=array.length - 1) {
  //base case is when <holder> is length of <array>, indicating reversal
  if (holder.length === array.length) {
    return holder
  } else {
  //push index of <array> to <holder>, then recur and decrement counter
    holder.push(array[counter])
    return reverseArr(array, holder, counter - 1)
  }
};


// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

var buildList = function(value, length, array=[]) {
  //base case is when length of <array> equals <length>
  if (array.length === length) {
    return array
  } else {
    //push <value> into array
    array.push(value)
    //call function until base case reached
    return buildList(value, length, array)
  }
};


// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2

var countOccurrence = function(array, value, index=0, counter=0) {
  //base case is when <index> has been incremented to length of <array>
  if (index === array.length) {
    return counter
  } else {
    //if match, <increment> counter and increment <index>
    if (array[index] === value) {
      return countOccurrence(array, value, index + 1, counter + 1)
  } else {
    //if not a match, leave <counter> the same but increment <index>
     return countOccurrence(array, value, index + 1, counter + 0)
   }
 }
}


// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

var rMap = function(array, callback, newArray=[], counter=0) {
  //reach base case when new mapped array is same length as <array>
  if (counter === array.length) {
    return newArray
  } else {
    //push element into new array after passing it to callback
    newArray.push(callback(array[counter]))
    //recur and increment counter to advance index
    return rMap(array, callback, newArray, counter + 1)
  }
};


// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

var nthFibo = function(n, fib=0, fibTransit=0, fibHolder=1) {
  //filter out negative n
  if (n < 0) {
    return null
  } //hit base case when n decremented to 0
  if (n === 0) {
    return fib
  } else { 
  //Three parameter 'wheel' generates fibonacci number sequence
  fibTransit = fib
  fib += fibHolder
  fibHolder = fibTransit
  //Make recursive calls until base case reached
  return nthFibo(n - 1, fib, fibTransit, fibHolder)
  }
};


// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

var capitalizeWords = function(input, newArray=[], counter=0) {
  //reach base case when counter is same length as <input>
  if (counter === input.length) {
    return newArray
  } else {
    //push element into new array after upper casing
    newArray.push(input[counter].toUpperCase())
    //recur and increment counter to advance index
    return capitalizeWords(input, newArray, counter + 1)
  }
};


// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']

var capitalizeFirst = function(input, newArray=[], counter=0) {
  //reach base case when counter is same length as <input>
  if (counter === input.length) {
    return newArray
  } else {
    //push element into new array after upper casing first letter and
    //splicing on remaining letters
    newArray.push(input[counter][0].toUpperCase() + input[counter].slice(1))
    //recur and increment counter to advance index
    return capitalizeFirst(input, newArray, counter + 1)
  }
};


// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}

var letterTally = function(str, obj={}) {
  //when string has been sliced to 0, return obj
  if (str.length === 0) {
  return obj
} //if property already created, increment it
  if (obj.hasOwnProperty(str[0])) {
  obj[str[0]] += 1
  //make recursive call, iterating through <str> via slice method
  return letterTally(str.slice(1), obj)
} else {
  //create object property and set its value to 1
  obj[str[0]] = 1
  //make recursive call, iterating through <str> via slice method
  return letterTally(str.slice(1), obj)
}
};


// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]

var compress = function(list, newArray=[]) {
  //when list sliced to 0, return compressed array
  if (list.length === 0) {
  return newArray
} //if element at index 0 not the same as subsequent element, push it
  //to newArray
  else if  (list[0] !== list[1]) {
  newArray.push(list[0])
  //make recursive call with slice to evaluate next element of list
  return compress(list.slice(1), newArray)
} else {
  //since element is the same as its subsequent element, skip it
  return compress(list.slice(1), newArray)
}
}


// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

var minimizeZeroes = function(array, newArray=[]) {
  //when list sliced to 0, return minimized array
  if (array.length === 0) {
  return newArray
} //if element is not a zero or is not the same as subsequent 
  //element, push it to newArray
  else if (array[0] !== 0 || array[0] !== array[1]) {
  newArray.push(array[0])
  //make recursive call with slice to evaluate next element of list
  return minimizeZeroes(array.slice(1), newArray)
} else {
  //since zero element is the same as its subsequent element, skip it
  return minimizeZeroes(array.slice(1), newArray)
}
}


// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]

var alternateSign = function(array, index=0) {
  //set base case to index reaching length of array
  if (array.length === index) {
    return array
} //if at odd index, multiply element by -1. NaN accounts for 0.
  else if ((index % 2 !== 0) && (index % 2 !== NaN) && (array[index] > 0)) {
    array[index] = (array[index] * -1)
    //call function while incrementing index
    return alternateSign(array, index + 1)
} //if number at even or 0 index is negative, make it positive
  if ((array[index] < 0) && (index % 2 ===0)) {
    array[index] = (array[index] * -1)
  }
  //make recursive call
  return alternateSign(array, index + 1)
}


// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
