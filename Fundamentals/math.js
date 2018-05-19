const numA = 7
const numB = 5
let sum;

// Basic math
sum = numA + numB // returns 12
sum = numA - numB // returns 2
sum = numA * numB // returns 35
sum = numA / numB // returns 1.4
sum = numA % numB // returns 2

// Math in-built Objects
sum = Math.PI; // returns pi
sum = Math.E; // return Eulers number --> 2.718281828459045
sum = Math.floor(Math.E) // rounds down eulers number
sum = Math.ceil(Math.E) // rounds up eulers number
sum = Math.round(Math.E) // return a number rounded appropriately
sum = Math.sqrt(49) // returns the square root
sum = Math.abs(5-12) // returns the absolute value
sum = Math.pow(24, 2) // returns firstArg^secondArg / a**b
// Returns NaN when given an array/list
sum = Math.min(2,33,4,1,55,6,3,-7)  //returns the smallest value
sum = Math.random() //returns a random decimal
sum = Math.random() * 20 // returns random decimal between 1-19
sum = Math.round(Math.random() * 20 + 1); //returns random whole number between 1-20


console.log(sum);
