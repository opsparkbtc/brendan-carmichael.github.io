////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  let arrayHolder = [];
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
  let returnVar = 0; 
  for (i = 0; i < array.length; i++) {
     returnVar += array[i];
   } return returnVar;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  var reversed = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]) 
}
  return reversed;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  let lengthVar = array.length
  let x = lengthVar
  let holder = []
  for (i = lengthVar - 1; i >= 0; i--) {
    holder.push(array[i]);
  } for (i = 0; i < lengthVar; i++) {
    array.pop(array[i])
  } for (i = 0; i < x; i++) {
    array.push(holder[i])
} return array;
}


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(inputArray) {
   let list = {value: inputArray[0],
                rest: {value: inputArray[1],
                        rest: {value: inputArray[2],
                                rest: null} } }
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(inputList) {
  
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

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
