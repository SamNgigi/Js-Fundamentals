/* 
  Each object has a prototype and prototype are actually objects
  themselves.

  All objects inherit their properties and methods from their prototypes.

  --> When dealing with object literals we inherit from
  'Object.prototype'.
  --> When dealing with objects with objects created a constructor we inherit from 'Person.prototype'.

  We also have a prototype chain that allows us to go up from a constructor prototype to object literal prototype.
*/

class Person {
  constructor(first_name, last_name, dob) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.birth_date = new Date(dob);
    this.calc_age = function () {
      const diff = Date.now() - this.birth_date.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  }
}

// Calculate age prototype

const john = new Person('Johnny', 'Walk', '2-24-1782');
const alice = new Person('Alice', 'Wonder', '7-30-1864');

/* 
  Below returns,
  Person  {
    first_name: "Johnny",
    last_name: "Walk",
    birth_date: Sun Feb 24 1782 00: 00: 00 GMT + 0227(East Africa Time),
    calc_age: ƒ
  }
*/
console.log(john);
/* 
  Below returns,
  Person  {
    first_name: "Alice",
    last_name: "Wonder",
    birth_date: Sat Jul 30 1864 00: 00: 00 GMT + 0227(East Africa Time),
    calc_age: ƒ
  }
*/
console.log(alice);