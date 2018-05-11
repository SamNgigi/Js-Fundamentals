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
jina = 'Name'
console.log(jina); //TypeError: Assignment to const var.
