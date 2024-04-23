// Immediately Invoked Function Expressions (IIFE)
//iffe is use to solve the problem of globel scope solution and also execute the function immediately

// function code() {
//     console.log(`DB Connected`);
// }
// code()

(function code() {                      //The parantheses becore the function is wher we wrote the defenation of function
    console.log(`DB Connected`);
})();            //the parantheses "()" here is the execeution we have to use a semicolon to endup the line

( () => {
    console.log("DB Connected 2");
})();

(function chai() {         //This is named iife
    console.log("DB Connected Two");
})();

((name) => {               // unnamed iife
    console.log(`DB Connected with ${name}`);
})('Database');