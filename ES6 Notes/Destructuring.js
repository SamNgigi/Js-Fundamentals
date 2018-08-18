/*
Destructuring is the porcess in ES6 where we extract values into variabls from data stored in objects and arrays.

Below is an example of object destructuring
*/
// We create the Object..then pass in the first and last properties
console.log("Object Destructuring");
const person = {
  first: "Jed",
  last: "Mel"
};
//We then map them into new variables f & l
const {first: f, last: l}= person
console.log(person);
console.log(l);
console.log(f);

// Array destructuring is based on index. So we map the values to the corresponding index of the value in the array
console.log("");
console.log("Array Destructuring");
const num = [32,232,45,76];
const[d,c,a,b,]= num;
console.log(d);
console.log(c);
console.log(a);
console.log(b);
