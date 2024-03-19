// # Premative Data Types

// 7 Types : String, Number, Boolearn, Null, Undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail
const id = Symbol('1234')
const Anotherid = Symbol('1234')

console.log(id === Anotherid);

const BigNumber = 13218468435654530565n  //Example of BigInt

// # Refrance Type (Non-Premative)

// Array, Objects, Functions

//Example of Array
const heros = ["Ironman", "Hockye", "Hulk"];

//Example of Ojects
let myObj = {
    name: "Raja",
    age: 25,
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof BigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof Anotherid);