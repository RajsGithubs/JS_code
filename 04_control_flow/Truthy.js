const userEmail = "R@gmail.com"

// if (userEmail) {            //It assumed to be true is known as Truthy
//     console.log("Get the user Email");
// } else {
//     console.log("Don't got user Email");
// }

// falsy Value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Value  {Except Falsy value all are Thuthy value}

// "0", 'false', " ", [], {}, function(){}          //Every thing in inverted coma are Truthy value

// if (userEmail.length === 0) {
//     console.log("Array is Empity");
// }

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    // console.log("The Array is Empity");
}

// Nullish Coalescing Operator (??): null undefined         //do safety check of null and undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

// console.log(val1);

// Terniary Operator

// condition ? true : false

const IceTeaPrice = 100
IceTeaPrice >= 80 ? console.log("less Than 80") : console.log("more than 80");