const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function name(val) {
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printme(item) {
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        language: "javaScript",
        languageFileName: "JS"
    },
    {
        language: "java",
        languageFileName: "Java"
    },
    {
        language: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) =>{
    console.log(item.language);
} )