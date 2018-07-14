// Other ways to create objects with their prototypes.
function Person() {}
Person.prototype.hi = function () {
  return `Waaasuup!`
}
// Here we are creating an object that will store our prototypes.
const personPrototypes = {
  // greeting: function () {
  //   return `Hello there ${this.first_name} ${this.last_name}!`;
  // },
  getsMarried: function (new_last_name) {
    this.last_name = new_last_name;
  },
  /* 
    Inheriting other constructor prototypes.In this
    case the Person constructor.
  */
  sema: Person.prototype.hi
}

// Seems the Object.create take in prototypes as the first argument.
const diana = Object.create(personPrototypes, );
// diana.prototype = Person.prototype;
// diana = new Person();
diana.first_name = "Diana";
diana.last_name = "Njeri";
diana.age = "547";
diana.greeting = function () {
  return `Hello there ${this.first_name} ${this.last_name}!`;
}
/* 
  below returns 
  {
    first_name: "Diana",
    last_name: "Njeri",
    age: "547"
  }
*/
console.log(diana);
// Returns Hello there Diana Njeri!
console.log(diana.greeting());
// Changing the last name.
diana.getsMarried("Mwangi");
// Returns 'Hello there Diana Mwangi!'
console.log(diana.greeting());
console.log(diana.sema());


// Another way to create an object.

const bryson = Object.create(personPrototypes, {
  first_name: {
    value: "Bryson"
  },
  last_name: {
    value: "Secondnamerson"
  },
  age: {
    value: "431"
  },
})

console.log(bryson);