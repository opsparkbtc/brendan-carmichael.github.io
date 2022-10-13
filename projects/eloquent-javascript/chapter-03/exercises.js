////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(first, second) {
   //use if/else statements and comparison statements to determine smaller number 
   if (first > second) {
      return second;
    } else if (second > first) {
      return first;
    } else {
      return first || second
    }
    
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(number) {
    //use if/else statements and recurse calls to determine if number is even or odd. Decrementings
    //eventually reaches our base cases.
    if (number === 0) {
      return true
    } else if (number === 1) {
      return false
    } else if (number === -1) {
      return false
    } else {
      return isEven(number - 2)
    }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, character) {
  //initialize counting variable
  let counter = 0;  
  //use for loop and equality operator to increment counter
  for (let i = 0; i < string.length - 1; i++) {
       if (string[i] === character) { 
       counter += 1
       }      
  } 
  //return counter, representing our character count
  return counter; 
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  //initialize counting variable
  let counter = 0;  
  //use for loop and equality operator to increment counter
  for (let i = 0; i < string.length - 1; i++) {
      //use toLowerCase  
      if (string[i].toLowerCase() === 'b') { 
       counter += 1
       }     
  } 
  //return counter, representing our 'b' count
  return counter; 
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
