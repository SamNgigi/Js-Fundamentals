/*
The const keyword declares a variable as a constant over time.
We have to initialize a const with a value. Otherwise we get an error.

Const variables are immutable. The variable does not change over time.
This just means that the const variable has to point the same thing, But the value can change...i.e.
   name is the immutable value But
   Clark Kent the value can change.

   const name = "Clark Kent"
   console.log(name);

For example below we can change the name value to whatever we want.

const person = {
  name: "Bruce Wayne"
};
// One
console.log(person);
outputs ---> { name: 'Bruce Wayne' }
// Two
person.name = "Clark"
console.log(person);
outputs ---> { name: 'Clark' }
//three
person.name = "Clark Kent"
console.log(person.name);
outputs ---> Clark Kent;
*/
const person = {
  name: "Bruce Wayne"
};
// One
console.log(person);

// Two
person.name = "Clark"
console.log(person);

//three
person.name = "Clark Kent"
console.log(person.name);



/*
To make an Object truly unchangeable we can use the Object.freeze() function.

const marvel = Object.freeze({});
marvel.name = "Incredible Hulk";
console.log(marvel);

Below would throws a TypeError when the "use strict" at top of the Js file. Whenever we try to extend our const

"use strict"
const sherlock = Object.freeze({});
sherlock.name = "Holmes";
console.log(sherlock);
*/
