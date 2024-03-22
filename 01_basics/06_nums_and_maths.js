const score = 400
console.log(score);

const balance = new Number(100)             // new keyword make sure the digit is Number the output on console is like [Number: 100]
console.log(balance);

console.log(balance.toString().length);     // It read shows the length of string in Numbers
console.log(balance.toFixed(2));            // it is use to show presegion value like 100.00

const  otherNumber = 13.132457              

console.log(otherNumber.toPrecision(4));        // It makes the value precies like 13.132457  become 13.1 and the number input after toPrecision(4) is shows how many numbers you want to show

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));    //This function can convert the raw value to the currency arangment the 'en-IN' is english Indian

// -------------------------------------------    Maths    ------------------------------------------------

console.log(Math);                      //Past this in console to get more functions like MDN

console.log(Math.abs(-4));              //Gives the absoulute value

console.log(Math.round(3.4));              //Gives the round value

console.log(Math.ceil(3.4));              //Gives the round value and we can controle the value outcome it gives the max value that can be

console.log(Math.floor(3.4));              //Gives the round value and we can controle the value outcome it gives the min value that can be

console.log(Math.min(3, 4, 1, 2));              //Gives the minimum value in array

console.log(Math.max(3, 4, 1, 2));              //Gives the maximum value in array

console.log(Math.random());              //Gives the rendom values

console.log((Math.random()*10) + 1);              //Gives the rendom values

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);