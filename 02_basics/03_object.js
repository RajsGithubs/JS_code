// singleton        when decleats as leterals so it dosent become singleton but it declares by constracter then it always becomes singleton
// object.create

// object laterals

const mySym = Symbol("Key1")

const Jsuser ={
    name : "Raj",
    "full name" : "Raj Savita",
    [mySym] : "myKey1",
    age : 24,
    location : "Gwalior",
    email : "Rajsavita@gmail.com",
    isLoggedIn : false,
    lastLoggedDay : ["monday", "Saterday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "rajsavita@google.com"

// Object.freeze(Jsuser)

Jsuser.email = "manmohan@random.com"

// console.log(Jsuser);

Jsuser.greetings = function(){
    console.log("Hello Viewer");
}


Jsuser.greetingsTwo = function(){
    console.log(`Hello Viewer ${this.name}`);
}

// console.log(Jsuser.greetings);
console.log(Jsuser.greetings());
console.log(Jsuser.greetingsTwo());