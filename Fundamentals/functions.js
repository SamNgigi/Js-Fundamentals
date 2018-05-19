//FUNCTION DECLARATIONS 
// With default
function greet(firstName = 'John', lastName = 'Doe') {
    // console.log('Hello');
    return `Hi ${firstName} ${lastName}!`;
}
// returns John Doe default
console.log(greet('Queen', 'Diana')); // returns Hi Princess Diana

// FUNCTION EXPRESSIONS
const square = function (x) {
    // return Math.pow(x, 2)
    return x * x
}
console.log(square(15)); // returns 225

// IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS - IIFEs
(function (name) {
    console.log(`IIFE Ran...${name}`);

})('home. Dope!') // returns IIFE Ran...home. Dope.

// PROPERTY METHODS
// A method is a function within an object.

const todo = {
    add: function () {
        console.log('Add todo...');
    },
    edit: function (id) {
        console.log(`Edit todo...${id}`);
    },
    delete: function (id) {
        console.log(`Delete todo... ${id}`);
    }
}

todo.add(); // returns Add todo..
todo.edit(55); // returns Edit todo...55.
todo.delete(75); // returns Delete todo...75.