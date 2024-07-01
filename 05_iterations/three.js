// for of

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const grertings = "Hello World"
for (const great of grertings) {
    // console.log(`Each char is ${great}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {           //[Key, value]  De-structure of array.
    console.log(key, ':-', value);
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spider' 
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }