// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Spiderman", "Superman"]

const myArr2 = new Array(1, 2, 3, 4 )
// console.log(myArr[0]);

// Array Methords

// myArr.push(6)  //Push is use to add any element at the last of the array
// myArr.push(7)
// myArr.pop()     //pop is use to remove the last element from the array

// myArr.unshift(9)       //add any element or value to the array at the first position
// myArr.shift()           //shift use to remove the first element of the array

// console.log(myArr.includes(5));//This function is use to know if the element is in the array or not
// console.log(myArr.indexOf(3));//Tells the index of the element

const newArr = myArr.join() //adds(Bind) all the elements of arrays to the string
// console.log(myArr);
// console.log(newArr);

// Slice and Splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)   //Slice Function doesnot manuplate the original array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)  //Splice function manuplates the original Array
console.log("c ",myArr);
console.log(myn2);