const user = {
    username: "Raj",
    price: 999999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="Raju"
// user.welcomeMessage()
// console.log(this);

// function code() {
//     // console.log(this.username); //we can not use this method in the functions
//     console.log(this);
// }
// code()

// const code = function () {
//     let username = "Raj"
//     console.log(this.username);
// }

const code = () => {
    let username = "Raj"
    console.log(this);      // we can not use this in arrow function but can use in regular functions
}

// code()

// const addTwo = (num1, num2) => {         //First method
//     return num1 + num2
// }

// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => num1 + num2      //if we use curly braces we have to use return

// const addTwo = (num1, num2) => (num1 + num2)      //if we use curly braces we have to use return "but when we use parantheses we don't have to use return"

const addTwo = (num1, num2) => ({username: "hitesh"})   //to return object we have to wrap that in to parantheses

console.log(addTwo(3, 4));

// const myArray = [2,3,4,5,6,7]
// myArray.forEach()