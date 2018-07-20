/*
JavaScript is a Dynamically Typed Language
 - Types are associated with values not the variables
 - The same var can hold multiple types
 - We do need to specify types
 - Most other languages are statically typed(Java, C#, C++)
 - There are supersets of Js and addons to allow static typing
   (TypeScript, Flow)

I. Primitive Data Types:
    - Stored directly in the location the var access.
        i.e var letters = 'abcd'
    - They are stored on the stack.

      They include;
        + Strings - 'This is a string.'
        + Numbers - 1,2,3,4,5.777
        + Boolean - true, false
        + Null - intentional empty value
        + Undefined - varS that has not been assigned a value.
        + Symbols (ES6)
*/
// Strings
const str = 'This is a string';
console.log(typeof str);
// Numbers
const num = 1111;
console.log(typeof num);
// Boolean
const ukweli = true;
console.log(typeof ukweli);
// Null
const nada = null;
/* This below returns object which is a bug because the first
implementation of Js the type tag for object being value 0 and
the current value pointing to the same thing.
It usually corrects itself.
*/
console.log(nada);
// Undefined
let defined;
console.log(defined);


/*
II. Reference Data Types:
    - Access by reference.
    - Objects that are stored on the heap.
    - A pointer to a location in memory.

    They include;
      + Arrays
      + Object Literals
      + Functions
      + Dates
      + Anything else
*/
// Arrays
const instruments = ['guitar', 'bass', 'drums', 'piano']
console.log(typeof instruments);
// Object Literals
const travel = {
  first: 'Italy',
  second: 'Greece'
}
console.log(typeof travel);
// Dates
const today = new Date()
console.log(typeof today);
