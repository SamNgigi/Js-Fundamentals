const firstName = 'Plethorically';
const secondName = 'Blessed';

let val;

// CONCATENATION
val = firstName + ' ' + secondName;

// APPEND
val = 'Jedidiah';
// val = 'Barukh' // Overwrites Jedidiah
val += ' Barukh'; // Append Barukh to Jedidiah

val = 'Hi! My name is ' + val + ' and I am plethorically blessed!';

// ESCAPING
// Throws --> SynataxError: Unexpected identifier error.
// val = 'That's awesome! She's the very best!'
val = 'That\'s awesome! She\'s the very best!'; // returns without error
// We can also use double quotes
val = "Isn't she lovely. Isn't she wonderful";

// LENGTH
val = firstName.length;

// concat()
val = firstName.concat(' ', secondName); // returns Plethorically Blessed

// CHANGE CASE
val = firstName.toLowerCase(); // returns plethorically
val = firstName.toUpperCase(); // returns PLETHORICALLY

// We can also treat strings like arrays. For instances;
val = firstName[0]; // returns the first char in firstName
val = firstName[firstName.length-1]; // returns the last char in firstName. -1 by itself doesn't work.

// indexOf()- Returns index of a char.
// Note index starts from 0
// If it returns -1 it means the char isn't in the string.
val = secondName.indexOf('e') // returns 2.
// If we want the last occurence of a char.
val = secondName.lastIndexOf('e') // returns 5

//charAt() - Returns char at a given index
val = secondName.charAt(0) // returns  B
val = secondName.charAt(secondName.length - 1) // returns d
// undefined vars within the charAt() method returns similar charAt(0)
val = secondName.charAt(secondName -11) // this wierdly returns B

// substring()
// Note up to but not including the last arg.
val= secondName.substring(0, 5) // returns Bless.

// slice() - Normally used for arrays.
// Returns similar result to substring()
val = firstName.slice(3, 7) // returns thor
val = firstName.slice(-4) // returns ally

// split()
var str = 'This is a test with split'
var tags = 'web design, web development, programming'
val = str.split() // returns ["This is a test with split"]
// returns ["This", "is", "a", "test", "with", "split"]
val = str.split(' ')
// returns ["web design", "web development", "programming"]
val = tags.split(', ')

// replace()
// returns  This is a test with replace.
val = str.replace('split', 'replace.')

// includes()
// Check if arg exists in a string. Returns a boolean.
val = str.includes('test') // returns true.
val = str.includes('replace') // returns false .



// Output
console.log(val);
