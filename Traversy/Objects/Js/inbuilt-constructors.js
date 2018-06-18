// String
// Initializing string primitive.
const name1 = 'John';
// Initializing through the String constructor.
// We use the 'new' key word to indicate a constructor.
const name2 = new String('Doe');

console.log(name1); // returns John
console.log(name2); // returns "Doe"
console.log(name2.valueOf()); // returns String("Doe")

console.log(typeof name1); // returns string
console.log(typeof name2); // returns object

if (name1 === 'John') {
  console.log('Is primitive string');
} else {
  console.log('Hio ni yako.');

}

// Numbers
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num1); // returns number
console.log(typeof num2); // returns object

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool1); // returns number
console.log(typeof bool2); // returns object

// Functions
const add1 = function (x, y) {
  return x + y;
};

const add2 = new Function('a', 'b', 'return a + b');


console.log(add1(7, 7)); // returns 14
console.log(add2(7, 7)); // returns 14

// Objects
const dav1 = {
  name: 'David'
};
const dav2 = new Object({
  name: 'Dave'
});

console.log(dav1); //returns {name: 'David'};
console.log(dav2); //returns {name: 'Dave'};

// Arrays
const list1 = [1, 3, 5, 7];
const list2 = new Array([1, 2, 3, 4, 5]);

console.log(list1); // returns [1, 3, 5, 7]
console.log(list2); // returns [Array(5)]

// Regular Expressions
const reg_ex1 = /\w+/;
const reg_ex2 = new RegExp('\w+');
const reg_ex3 = new RegExp('\\w+');

console.log(reg_ex1); // returns /\w+/
console.log(reg_ex2); // returns /w+/
console.log(reg_ex3); // returns /\w+/


/* 
  Many implementations of the inbuilt core JS constructors are actually
  slow and inefficient.
  It is better to use the primitive definitions WITHOUT constructors.
*/