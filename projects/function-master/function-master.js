//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
  //return the values of an object with Object.values method
  return Object.values(object)
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
  //Set a variable to the keys in object
  let x = Object.keys(object)
  //convert array to string and return
  x = x.join(" ")
return x;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //open a containing array 
    let array = []
    //create array of parameter objects's values
    let x = Object.values(object)
    //loop through x and push the strings to the containing array
    for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === 'string') {
      array.push(x[i])
   }
}
//convert the containing array to a string
let returnString = array.join(' ');
return returnString
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
  //Use boolean statement and array prototype method to determine if array is array  
  if (Array.isArray(collection) === true) {
        return 'array'
      //Since arrays have already been accounted for, check for non-array objects and return them   
      } else if (typeof collection === 'object') {
        return 'object'
    }

}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //create a variable of all characters which are not the first character
    let slicey = string.slice(1, string.length)  
    //return the first letter of the parameter string capitalized and with the variable added to the end
    return string[0].toUpperCase() + slicey
  }

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) { 
    //Open a containing array
    let holdArray = []
    //split input string into an array
    let stringArray = string.split(' ')
    //use loop to acces each index entry of array and apply prior capitalizeWord function
      for (i = 0; i < stringArray.length; i++) {
        //push the modified words into containing array
        holdArray.push(capitalizeWord(stringArray[i]))
      } 
      //create string to be returned from the values in the containing array
      let y = holdArray.join(' ')
      return y
  }

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
  //access the name property of object while passing it as an argument to capitalizeWord function
  let message = "Welcome " + capitalizeWord(object.name) + "!"
  return message
  }


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
  //use dot notation to access object properties, which are passed to capitalizeWord function as arguments
  let message = capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species)
  return message
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  //check if object has noises property, is an array, and is not empty and return it as a string
  if (object.hasOwnProperty('noises') && Array.isArray(object.noises) === true && (object.noises.length > 0)) {
    return object.noises.join(' ');
  ////check if object has noises property which is not an array and return it as a string
  } else if (object.hasOwnProperty('noises') && Array.isArray(object.noises) === false) {
    return object.noises;
  } else {
    //If criteria not met, return string indicating no such property
    return 'there are no noises'
  }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
  //set a counter which will 'trip' upon finding the second passed argument within the first
  let counter = 0;
  //create iterable array from passed string
  let stringArray = string.split(' ')
  //loop through stringArray and sets counter to indicate match
  for (let i = 0; i < stringArray.length; i++)
  if (stringArray[i] === word) {
    counter += 1
  }
  //return true/false based on counter value
  if (counter === 1) {
    return true
  } else {
    return false
  }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//push passed name into friends array of passed object
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) { 
  //open counter as in "hasWords"
  let counter = 0;
  //Check for friends property's existence and loop through it in search of match
  if (object.hasOwnProperty('friends') === true) {
    for (let i = 0; i < object.friends.length; i++) {
   if (object.friends[i] === name ) {
  counter += 1;
  }
  }
  //return value based on if counter was "tripped" by a match
  if (counter !== 0) {
    return true;
  } else {
    return false
  }
  //Have a lack of relevant property return false
  } else if (object.hasOwnProperty('friends') === false) {
    return false
  }
  }

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function nonFriends(name, array){
    //Open holder strings and arrays
    let holder = '';
    let nameArray = [];
    let finalArray = [];
    //loop through input array and filters for the passed name
    //set matches as holder's value and push non-matches to nameArray
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) {
            holder = array[i];
      } else {
            nameArray.push(array[i].name);
        }
    } 
    //return nameArray if holder has no matches
    if (holder === ''){
        return nameArray;
    }
    //loop through nameArray for final check of one-sided friendships. Use indexOf and push to our last holder    
     for (let i = 0; i < nameArray.length; i++) {
        if (holder.friends.indexOf(nameArray[i]) === -1) {
            finalArray.push(nameArray[i]);
    }
  }
  //return array of non-friends
  return finalArray;
}
      




//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  //Overwrite present keys/create new key
  object[key] = value;
  return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  //Use nested for loops, first looping through the keys
  for (let i = 0; i < Object.keys(object).length; i++) {
  //Next loop through the values of those keys
    for (let j = 0; j < array.length; j++) {
    //If a match is found between object and array, set a variable to element of array
      if (array[j] === Object.keys(object)[i]) {
      let holdVariable = (array[j])
      //delete the key that matches holdVariable's name
      delete object[holdVariable]
    }
  }
 } 
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  //open a holder array
  let holderArray = [];
  //Loop through array's items, using i as first of two items to be 'checked'
  for (let i = 0; i < array.length; i++) {
    //Loop through array again while 'i' is assigned to the same index entry 
    for (let j = 1; j < array.length; j++) {
    //if the strings assigned to i and j indexes have the same value, change j's value to 'DELETE_ME'.
    //Use logical 'and' operator to prevent the nested loops from changing when comparing themselves
      if (array[j] === array[i] && (i !== j)) {
      array[j] = 'DELETE_ME'
    }
  }
  }
  //Now that all duplicated items have been marked for deletion, push all unmarked items to a new array
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 'DELETE_ME') {
      holderArray.push(array[i])
  }
  }
  //return array of non-duplicates
  return holderArray
  }

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}