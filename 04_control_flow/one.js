// if
const isuserLoggedIn = true
const temprature = 40

// if ( temprature <= 50) {


// if ( temprature === 40) {
//     console.log("temprature is less than 50");
// } else{
//     console.log("temprature is grater than 50");
// }

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

const balance = 1000

// if (balance > 500) console.log("test"),console.log("test");       //inpliset scope it means let it the scope and it must be in single line it is bad practise

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const LoggedInfromgoogle = false
const LoggedInfromemail = true

if (userLoggedIn && debitcard && LoggedInfromgoogle || LoggedInfromemail) {
    console.log("Allow to buy cources");
}