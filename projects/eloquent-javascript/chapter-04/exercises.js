////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  //open holding array
  let arrayHolder = [];
  //use if/else if statements to push elements which conform to comparisons into a new array
  if (start > end && step >= 1) {
      for (let i = end; i <= start; i += step) {
      arrayHolder.push(i);
      }
} else if (start < end && step >= 1) {  
    for (let i = start; i <= end; i += step) {
      arrayHolder.push(i);
}
} else if (start > end && step <= 1) {
      for (let i = start; i >= end; i += step) {
      arrayHolder.push(i);
      }
  }  
return arrayHolder
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  //initialize a variable to be returned
  let returnVar = 0; 
  //loop through and add elements to returnVar
  for (i = 0; i < array.length; i++) {
     returnVar += array[i];
   } return returnVar;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //initialize holding array
  var reversed = [];
  //loop backwards through array and push elements to new array
  for (var i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]) 
}
  return reversed;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  //establish variable for length and a holding array.
  let lengthVar = array.length
  let holder = []
  //loop through array and push its elements to holder array in reverse order
  for (i = lengthVar - 1; i >= 0; i--) {
    holder.push(array[i]);
   //empty array of current elements
  } for (i = 0; i < lengthVar; i++) {
    array.pop(array[i])
  //iterate through holder and push elements into original array
  } for (i = 0; i < lengthVar; i++) {
    array.push(holder[i])
} 
//return original array, which now has its elements reversed
return array;
}


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(inputArray) {
  //set list to null. Start at the very end.
  let list = null; 
  //iterate through list backwards
  for (let i = inputArray.length - 1; i >= 0; i--) {
    //build list from last element to first. Last object's 'rest' key is null. Second to last object's
    //'rest' key is last object. Third to last object's rest key is second to last object, etc.
    list = {value: inputArray[i], rest: list}
  }
return list
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  //initialize array to receive pushed values
  let finalArray = []
  //initialize variable to hold modified array value
  let tempArray = list
  //begin while loop and push values
  let counter = 0
  while (tempArray) {
    finalArray.push(tempArray.value)
    //reset value while looping for de facto iteration
    tempArray = tempArray.rest
  }
  return finalArray
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  //create a new object with the provided element and add the passed list to it
  let newList = {value: element, rest: list}
  return newList
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number){
  //open holder 
  let holder = list;
  //return value if we've reached end of recursion.
    if (number === 0) {
      return holder.value
    }//check holder for rest property
      else  {
        //if rest property present, set new value to holder
        if (holder.rest) {
        holder = holder.rest;
          //return for continued recursion with second parameter decremented. Count backwards to go
          //forwards via the rest property that links the list elements
          let checker = nth(holder, number - 1); 
          return checker
        }
    }
  }

  

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
