// const FbUser = new Object() //This is an singleton object
const FbUser = {}  //This is not an singleton object except other things are same

FbUser.id = "123abc"
FbUser.name = "Raja"
FbUser.isLoggedIn = true

// console.log(FbUser);

const regularUser = {
    email : "mannu@google.com",
    fullname: {
        userfullname: {
            FirstName: "Mannu",
            lastName: "Sahu"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.FirstName);

const obj1 = {"a" : 1, "b" : 2}
const obj2 = {"c" : 3, "d" : 4}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}


// console.log(obj3);

const user = [
    {
        id : 1,
        email : "mannu@"
    },
    {
        id : 1,
        email : "mannu@"
    },
    {
        id : 1,
        email : "mannu@"
    },
]

user[1].email

// console.log(FbUser);

// console.log(Object.keys(FbUser));
// console.log(Object.values(FbUser));
// console.log(Object.entries(FbUser));
// console.log(FbUser.hasOwnProperty("isLoggenIn"));

const course = {
    coursename : "JS Course",
    Courceprice : "999",
    courseinstructor : "Raj"
}

// course.courseinstructor

const {courseinstructor:instructor} = course

// console.log(courseinstructor);
console.log(instructor);

// Example of apis
// {
//     "name":"raj",
//     "Coursename": "js course"
//     "price":"free"
// }

[
    {},
    {},
    {}
]