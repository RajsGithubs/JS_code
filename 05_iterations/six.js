const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
        // console.log(item);
        // return item
})

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums =  myNums.filter( (num) => num > 4)
// console.log(newNums);

// const newNums = []

// myNumbs.forEach ( (num) => {
//         if (num > 4) {
//                 newNums.push(num)
//         }
// })
// .console.log(newNums);

const books = [
        { title: 'Book one', genre: 'Friction', Publish: 1981, edition: 2004 },
        { title: 'Book two', genre: 'Non-Friction', Publish: 1992, edition: 2008 },
        { title: 'Book three', genre: 'History', Publish: 1999, edition: 2007 },
        { title: 'Book four', genre: 'Non-Friction', Publish: 1989, edition: 2010 },
        { title: 'Book five', genre: 'Science', Publish: 2009, edition: 2014 },
        { title: 'Book six', genre: 'Friction', Publish: 1987, edition: 2010 },
        { title: 'Book seven', genre: 'History', Publish: 1986, edition: 1996 },
        { title: 'Book eight', genre: 'Science', Publish: 2011, edition: 2016 },
        { title: 'Book nine', genre: 'Non-Friction', Publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => {
        return bk.Publish >= 1995 && bk.genre === "History"

})
console.log(userBooks);