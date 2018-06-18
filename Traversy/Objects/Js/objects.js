/* 
  When 'this' keyword is defined in the global scope it pertains to the
  window object.
  i.e console.log(this)
*/
// OBJECT LITERALS
const person = {
  name: 'James',
  age: 158
}
console.log(person); // returns {name: "James", age:158}
console.log(person.age); // returns 158

// CONSTRUCTOR ==  CLASS
// Below is a ES2015 (ES6) constructor definition.
class Person {
  constructor(name, dob) {
    this.name = name;
    this.birthday = new Date(dob)
    this.calc_age = function () {
      // Standard way of calculating the age given the birth-date.
      const diff = Date.now() - this.birthday.getTime()
      const ageDate = new Date(diff)
      return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
    //below returns all the objects initialized by person i.e. John, James, Phill
    console.log(this);
  }
}
const john = new Person("John", '1-21-1697');
const peter = new Person("Peter", '5-16-1442');
const phill = new Person("Phillip", '10-10-1988');
/* 
Person  {
  name: "John",
  birthday: Wed Jan 21 1970 00: 00: 00 GMT + 0300(East Africa Time),
  calc_age: ƒ
}
*/
console.log(john);
console.log(john.calc_age());
/* 
Person  {
  name: "Peter",
  birthday: Mon May 16 1442 00: 00: 00 GMT + 0227(East Africa Time),
  calc_age: ƒ
}
*/
console.log(peter);
console.log(peter.calc_age()); // returns 576
/* 
Below 
returns Person {
  name: "Phill"
  birthday: Mon Oct 10 1988 00: 00: 00 GMT + 0300(East Africa Time)
}
*/
console.log(phill);
console.log(phill.calc_age()); // returns 29