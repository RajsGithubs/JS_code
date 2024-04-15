function saymyname() {
    console.log("R");
    console.log("a");
    console.log("j");
}

// saymyname()

// function add(num1, num2){       //The variables after function name are parameters
//     console.log(num1 + num2);
// }

function add(num1, num2){       //The variables after function name are parameters
    // let result = num1 + num2
    // console.log("Raj");
    // return result        //Nothing print after return

    return num1 + num2      //Section way to return 
}
// add(2, 3)   //The variables after add are arguments
const result = add(2, 3)  //The variables after add are arguments

// console.log("Result", result);

// function LoginUserMessage(username) {
//     // if (username === undefined) {
//     //     console.log("Please Enter a user name");
//     //     return
//     // }

//     if (!username) {
//         console.log("Please Enter a user name");
//         return
//     }
//     return`${username} Just Loggedin`
// }
function LoginUserMessage(username = "User") {  // Another way to give a default name
    // if (username === undefined) {
    //     console.log("Please Enter a user name");
    //     return
    // }

    if (!username) {
        console.log("Please Enter a user name");
        return
    }
    return`${username} Just Loggedin`
}

// console.log(LoginUserMessage("Raj"));
console.log(LoginUserMessage());