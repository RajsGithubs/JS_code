let a = 100     //it is globel scope
if (true) {
    let a = 10      //it is block scope
    const b = 20
    console.log("Result :", a);
}

console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Raj"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()

if (true) {
    const username = "Raj "
    if (username == "Raj ") {
        const website = "Github"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ----------------------------------------------------------------------

function addone(num) {
    return num + 1
}
console.log(addone(5))

const addtwo = function (num) {
    return num + 2
}
(addtwo(5))