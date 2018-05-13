let val;

// num
val = 5;

// Number to String
val = String(val)
val = String(4+4)

// Boolean to String
val = String(true);

// Date to string
val = String(new Date());

// Array to String
val = String([1,2,3,4]) // returns wsithout the box braces

// toString() method and String() are similar
val = ([5,5.7, 7.5]).toString()


// String to number
val = '5.0908'
val = Number(val)
val = Number(true) // returns 1
val = Number(false) // returns 0
val = Number(null) // returns 0
val = Number ('hello') // returns NaN
val = Number ([1,2,3,4,5]) // returns NaN

// To convert to number we can also use parseInt(), parseFloat()
val = parseInt('7.75') // returns whole number 7
val = parseFloat('7.57') // returns with decimals

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length); --> Only works on strings
console.log(val.toFixed(3)); //--> To the number of decimal places you desire. Only works on numbers

/*
  Whey you call toFixed() method to a string it throws the error

    'Uncaught TypeError: val.toFixed is not a function.'

  Causing me to think that the is not a function is throw when we
  call a method on the wrong tyoe if var
*/

// There is also type cohersion where by Js decides what datatype
// to work with if not explicitly defined
const numA = String(7)
const numB = 5
const sum = numA + numB

console.log(sum); // returns 75
console.log(typeof sum);
