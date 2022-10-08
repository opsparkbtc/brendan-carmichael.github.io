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
  let message = "Welcome " + capitalizeWord(object.name) + "!"
  return message
  }


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
  let message = capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species)
  return message
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  if (object.hasOwnProperty('noises') && Array.isArray(object.noises) === true && (object.noises.length > 0)) {
    return object.noises.join(' ');
  } else if (object.hasOwnProperty('noises') && Array.isArray(object.noises) === false) {
    return object.noises;
  } else {
    return 'there are no noises'
  }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
  let counter = 0;
  let stringArray = string.split(' ')
  for (let i = 0; i < stringArray.length; i++)
  if (stringArray[i] === word) {
    counter += 1
  }
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
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) { 
  let counter = 0;
  if (object.hasOwnProperty('friends') === true) {
    for (let i = 0; i < object.friends.length; i++) {
   if (object.friends[i] === name ) {
  counter += 1;
  }
  }
  if (counter !== 0) {
    return true;
  } else {
    return false
  }
  } else if (object.hasOwnProperty('friends') === false) {
    return false
  }
  }

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function nonFriends(name, array){
    let holder = '';
    let nameArray = [];
    let finalArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) {
            holder = array[i];
      } else {
            nameArray.push(array[i].name);
        }
    } if (holder === ''){
        return nameArray;
    } for (let i = 0; i < nameArray.length; i++) {
        if (holder.friends.indexOf(nameArray[i]) === -1) {
            finalArray.push(nameArray[i]);
    }
  }
  return finalArray;
}
      




//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  object[key] = value;
  return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  for (let i = 0; i < Object.keys(object).length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] === Object.keys(object)[i]) {
      let holdVariable = (array[j])
      delete object[holdVariable]
    }
  }
 } 
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  let holderArray = [];
  let returnArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
    if (array[j] === array[i] && (i !== j)) {
      array[j] = 'DELETE_ME'
    }
  }
  }
  console.log(array)
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 'DELETE_ME') {
      holderArray.push(array[i])
  }
  }
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