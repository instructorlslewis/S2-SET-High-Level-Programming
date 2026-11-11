/**
 * Building blocks of JavaScript: objects, dot and bracket notation, 
 * this, variables, scope, and closures
 * 
 * Professor Lewis
 * November 10, 2026
 */

/**
 * User object
 */
const user = {
    name: "Alice",
    email: "alice@gmail.com",
    greet: function() {
        console.log(`Hello, I am ${this.name}.`)
    }
}

//Object dot notation
console.log(user.name);
console.log(user.email);
user.isAdmin = true;  //creates on the fly - dynamically at runtime
console.log(user.isAdmin);

//Object bracket notation
let keyToAccess = 'email';
console.log(user[keyToAccess]);


/**
 * Object method.  - implicit binding
 * Think of the keyword this as being like the word "I"
 */

user.greet();

/**
 * Constructor Call (new Binding)
 * constructor creates new objects
 */
function User(name){
    this.name = name;
    this.isAdmin = false;
}
const aliceObj = new User("Alice");
console.log(aliceObj.name);
console.log(aliceObj.isAdmin);


/**
 * Arrow Function (Lexical Binding)
 * Lexical scope - where you define a variable in the code that determines where it can be accessed.
 * Such as an inner function can access variable defined in it outer functions.
 * 
 */

const user2 = {
    name: "Morgan",
    hobbies: ["reading", "coding", "acting"],
    showHobbies: function(){
        this.hobbies.forEach(hobby =>{
            console.log(`${this.name} likes ${hobby}.`);
        });
    }
};

user2.showHobbies();


/**
 * Closure allows a function to remember and access variables from its lexical scope, even after
 * the outer function has finished running.
 */

function createUser(){
    const name = "Tracy";

    return function greet(){
        console.log(`Hello, I am ${name}.`);
    };
}

const user3 = createUser();

//user() is called as a function because createUser() returns the greet function, 
//which is then stored in the variable user.
user3();

