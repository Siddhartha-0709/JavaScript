// #Primitive Datatypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//JavaScript is a dynamically typed language. In dynamically typed languages, the data type of variables is determined by the value they hold at runtime, and can change throughout the program as we assign different values to them. There's no inbuilt way to annotate or restrict the types of variables.

// #Reference Datatypes or Non Primitive

// Arrays, Object, Functions


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof(myFunction))
console.log(typeof anotherId);



// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "hiteshChaudhurydotcom"

let anotherName = myYoutubeName

anotherName="ChaiaurCode"
console.log(myYoutubeName)
console.log(anotherName)


let user1={
    email: 'user@google.com',
    upi: 'user@ybl'
}

console.table([user1.email,user1.upi]);

let user2=user1;

user2.email='hello@gmail.com'
console.table([user1.email,user1.upi]);