//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
   return Object.values(object)
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
let x = Object.keys(object)
x = x.join(" ")
return x;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let array = []
    let x = Object.values(object)
    for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === 'string') {
      array.push(x[i])
   }
}
let returnString = array.join(' ');
return returnString
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true) {
        return 'array'
    } else if (typeof collection === 'object') {
        return 'object'
    }

}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let slicey = string.slice(1, string.length)  
    return string[0].toUpperCase() + slicey
  }

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) { 
    let holdArray = []
    let stringArray = string.split(' ')
      for (i = 0; i < stringArray.length; i++) {
        holdArray.push(capitalizeWord(stringArray[i]))
      } 
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


function nonFriends(name, array) {
  
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
    if Object.keys(object)[i]
  }

  }

  }

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

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