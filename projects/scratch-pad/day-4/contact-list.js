// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
//function returns a new contact object
function makeContact(id, nameFirst, nameLast) {
return {id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
}
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contactArray =[];
    
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contactArray.length;
        },
        addContact: function(contact) {
            return contactArray.push(contact);
        },
        findContact: function(fullName) {
            //loop through contact array
            for (let i = 0; i < contactArray.length; i++)
              //access the nameFirst and nameLast properties and add them together. Then match with the fullName parameter.
              if (contactArray[i].nameFirst + ' ' + contactArray[i].nameLast === fullName) {
                //return our match
                return contactArray[i]
              } 
        },
        removeContact: function(contact) {
            //loop through contactArray and match it, then find a way to delete it. Be careful of simultaneous iteration/modify
            for (let i = 0; i < contactArray.length; i++) {
                if (contactArray[i] === contact) {
                    return contactArray.splice(i, 1)
                }
            }
        },
        //Need to deal with the newline characters
        printAllContactNames: function() {
            //open holding array
            let holdingArray = []
            //loop through array
            for (let i = 0; i < contactArray.length ; i++)
              //push to holding array concatenated string of nameFirst and nameLast, including a newline character for formatting
              holdingArray.push(contactArray[i].nameFirst + ' ' + contactArray[i].nameLast + '\n')
            //convert the holding array into a string
            let joinedString = holdingArray.join('')
            //perform final modification to eliminate newline character from the final name
            let finalString = joinedString.slice(0, joinedString.length - 1)
            //return our properly formatted string
            return finalString
        }   
        
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
