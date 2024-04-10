const marval_heros = ["Thor", "Ironman", "Spiderman"]
const DC_Heros = ["Superman", "Flash", "Batman"]

// marval_heros.push(DC_Heros)

// console.log(marval_heros); //This is not a good syntax
// console.log(marval_heros[3][1]); //This is not a good syntax

// const allheros = marval_heros.concat(DC_Heros) //To marge two arrays
// console.log(allheros);

const allnewheros = [...marval_heros, ...DC_Heros] //these ... thing is Spread operater that used to marge two arrays

// console.log(allnewheros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //Flat function is for arrange all elements in the arrays without any worry and "the Infinity is the depth of the array"
console.log(real_another_array);

console.log(Array.isArray("Raj savita"));   //isArray function is use to verify is the value array or not
console.log(Array.from("Raj Savita")); //from fun is use to convert any value to an array

console.log(Array.from({name : "Raj Savita"})); //if this fun cannot convert the arrays than it gives empty arrays and we have to defines of what element we need to converts in to arrays

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //of fun Returns a new array from the sets of elements