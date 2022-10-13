// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(inputArrays) {
  //set the value of a new array to the result of calling reduce on the parameter array 
  let reducedArray = inputArrays.reduce((a, b ) => {
    //use concat method in function to be passed to reduce 
    let reduceFunctionVar = a.concat(b);
    //return the function to reduce
    return reduceFunctionVar;
})
return reducedArray;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, testFunc, updateFunc, bodyFunc) {
  //create for loop, using the function calls themselves instead of numbers
  for (let i = value; testFunc(i); i = updateFunc(i)) {
    bodyFunc(i)
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(collection, func) {
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


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection() {

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
