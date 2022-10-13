// #!/usr/bin/env node

//node index.js = testing

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const { mapValues } = require('lodash');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./brendan-carmichael.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // implement a higher order function call. Assign output to what filter function returns
    let output = _.filter(array, function(customer){
        //return true if input is male
        return customer.gender === 'male'
    })
    return output.length
};

var femaleCount = function(array) {
     //use reduce to obtain number of female customers
     let output = _.reduce(array, function(accumulator, current){
        //reducer function checks for female and increments accumulator if so
        if (current.gender === 'female'){
        accumulator += 1;
     }
     //returns accumulator, which now equals the number of female customers 
     return accumulator;     
    }, 0);
    return output;
 }






var oldestCustomer = function(array) {
    //open up holding variables for age and name
    let ageCounter = 0;
    let nameVariable = '';
    //iterate through array element objects
    for (let i = 0; i < array.length; i++) {
    //If an older person is found, update the age counter to their age and the name variable
    //to their name
    if (array[i].age > ageCounter) {
        ageCounter = array[i].age;
        nameVariable = array[i].name;
    }
   }
   //return the oldest
   return nameVariable;
}

var youngestCustomer = function(array) {
    //open up holding variables for age and name
    let ageCounter = 1000;
    let nameVariable = '';
    //iterate through array element objects
    for (let i = 0; i < array.length; i++) {
    //If a younger person is found, update the age counter to their age and the name variable
    //to their name
    if (array[i].age < ageCounter) {
        ageCounter = array[i].age;
        nameVariable = array[i].name;
    }
   }
   //return the youngest
   return nameVariable;
}

var averageBalance = function(array) {
    //open up variable to add numbers to. Will be averaged later
    let balanceHolder = 0
    //iterate through customer objects
    for (let i = 0; i < array.length; i++) {
    //format the balance property with a regex
    let regexedBalance = array[i].balance.replaceAll(/[$,]/g, '')
    //change balance from string to number
    let formattedBalance = parseFloat(regexedBalance)
    //add number to variable
    balanceHolder += formattedBalance
    }
  //divide variable by number of accounts to determine average
  let averageBalance = (balanceHolder / array.length);
  return averageBalance
}

var firstLetterCount = function(array, letter) {
    //initialize counter variable
    let counter = 0;
    //iterate through array
    for (let i = 0; i < array.length; i++) {
    if (array[i].name[0].toLowerCase() === letter.toLowerCase())
    counter += 1
    }
    return counter;
};

var friendFirstLetterCount = function(array, customer, letter) {
    //initialize counter variable
    let counter = 0;
    //iterate through array
    for (let i = 0; i < array.length; i++) {
      //check if array element is desired customer
      if (array[i].name === customer) {
        //loop through friends array.
        for (let j = 0; j < array[i].friends.length; j++) {
          //increment counter if match
          if (array[i].friends[j].name[0].toLowerCase() === letter.toLowerCase()){
    counter += 1
        }
      }
    }
    }
    return counter;
};

var friendsCount = function(array, name) {
    //open holding array
    let holdingArray = [];
    //loop through people in array
    for (let i = 0; i < array.length; i++){
        //loop through friends
        for (let j = 0; j < array[i].friends.length; j++) {
            //check if the friend's name matches <name>
            if (array[i].friends[j].name === name) {
                holdingArray.push(array[i].name)
            } 
        }
    }
    return holdingArray;
}


var topThreeTags = function(array){
    let x = _.pluck(array, tags);
    return x
}

var genderCount;

//npm start --prefix ./brendan-carmichael.github.io/projects/let-s-get-functional

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
