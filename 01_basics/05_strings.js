const name = "Raj"
const uid = "123456"

// console.log(name + uid + "Value"); This is not a good practice must not be use

console.log(`This ${name} and my User Id is ${uid}`); // The `` name is Backics and this is string interpulition This is the new way to create string also can add methods like ${name.toUpperCase()} 

const gameName = new String(`Battel Ground Mobile India`)


// Accessing Key Value pairs

console.log(gameName[0]);               

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)              //Setting the limit that from which index to which one we want to show number
console.log(newString);


const anotherString = gameName.slice(-8, 4)              //Slice the String.
console.log(anotherString);

const newStringOne = "   Raj    "
console.log(newStringOne);
console.log(newStringOne.trim());           //Trim can trim unnessesary spaces

// this can replace any string in url

const url = "https://rajsavita.com/raj%20savita"

console.log(url.replace('%20', '-'));

console.log(gameName.split(' ')); //split() splits a string into an array of substrings, and returns the array:

