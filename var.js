var name = 'Jedi Master';
console.log(name);
// reassigning
var name = 'Jedidiah Meilsoir'
console.log(name);

// Init var
var greeting;
console.log(greeting); // undefined
greeting = 'Sup'
console.log(greeting);

/*

 - Var name can contain letters, numbers _ or $
 - Cannot start with numbers though.
 - _varName normally used with private vars especially in frameworks
 - $var reserved for JQuery

*/

//Multi word vars best practices

var firstName = 'James'; // Camel case
var first_name = 'Bond'; // Underscore --> php/python
var FirstName = 'Double'; // Pascal
var firstname = 'o7'; // Not encouraged


// LET - allows reassigning
let otherName;
otherName = 'Hakuna'
console.log(otherName);
otherName = 'Matata'
console.log(otherName);

// CONST - does not allow reassigning
const
jina = 'Some'
console.log(jina);
// jina = 'Name'
// console.log(jina); --> TypeError: Assignment to const var.

// Const values have to be assigned. They cannot be initializes without being assigned a value
// const greeting; --> SyntaxError: Missing initializer in const declaration

/*

When working with objects and arrays, the const key word allows us
to mutate properties and/or elements within them but we can't
re-assign.

For example:
*/
const person = {
  name: 'David',
  age: '30'
}
console.log(person);

// Allowed
person.name = 'Solomon'
console.log(person);

/*

Would throw an error even before logging.
  person = {
    name: 'Jedidiah',
    age: '30'
  }
console.log(person);  --> TypeError: Assignment to constant variable

*/

// Works the same for lists/arrays

const numbers = [1, 2, 3, 4];
console.log(numbers);
// Allowed
numbers.push(5)
console.log(numbers);

/*

Would throw an error
numbers = [1,2,3,4,5,7]
console.log(numbers);  --> TypeError: Assignment to constant variable

*/
