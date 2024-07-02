const  myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and Currval: ${currval}`);
//     return acc + currval
// },0)

    const myTotal = myNums.reduce( (acc, currval) => acc + currval,0)

console.log(myTotal);

const shopingkart = [
    {
        itemName: "JS Course",
        price: 299
    },
    {
        itemName: "Py Course",
        price: 999
    },
    {
        itemName: "Mobdev Course",
        price: 5999
    },
    {
        itemName: "data science Course",
        price: 12999
    },
]

const pricetopay = shopingkart.reduce((acc, item) => acc + item.price, 0)

console.log(pricetopay);