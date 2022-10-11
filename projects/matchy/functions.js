/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

const { stubString } = require("lodash");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(inpArray, string) {
    //open a counter
    var counter = ''   
      //loop through array searching for a match
      for (let i = 0; i < inpArray.length; i++) { 
         if (inpArray[i].name === string) { 
         //set counter to the match and return the array
         counter = inpArray[i].name;
         return inpArray[i]
         }
      }
      //return null if no matches
      if (counter === '') {
        return null
      }
  }


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    //loop through passed array
    for (let i = 0; i < animals.length; i++) {
        //if it exists,replace the matched <name> parameter with the <replacement> parameter
        if (animals[i].name === name) {
            animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    //loop through array
    for (let i = 0; i < animals.length; i++) {
        //if there is a match, remove using the splice method
        if (animals[i].name === name) {
            animals.splice(animals[i])
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    //set a counting variable
    let nameChecker = 0
    //loop through passed in array
    for (let i = 0; i < animals.length; i++) {
        //if a match is found, increment the counting variable so as not to add duplicate animal
        if (animals[i].name === animal.name) {
            nameChecker += 1
        }
    }
    //If the animal has a name and species and the checker has not be tripped, push the animal to animals array
    if (animal.name.length > 0 && animal.species.length > 0 && nameChecker < 1) {
        animals.push(animal)

    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
