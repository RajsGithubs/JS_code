// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 2, 22)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 2, 22, 4, 20, 0)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2024-03-22")
let myCreatedDate = new Date("03-22-2024")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth( )+ 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "Long",
})