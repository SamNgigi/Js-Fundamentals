// Person Constructor
function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

// Greeting method.
Person.prototype.greeting = function () {
  return `Hello there ${this.first_name} ${this.last_name}!`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());
console.log(person1);

// Customer Object

class Customer extends Person {
  constructor(first_name, last_name, phone, membership) {
    /* 
      From the person constructor.
      Inherits the properties from Person constructor including the prototypes.

      In the super method we specify the properties we are inheriting from the parent so
      that we do not have to use the this key word to define them.
    */
    super(first_name, last_name);
    this.phone = phone
    this.membership = membership
  }
}

// Creating the Customer

const customer_1 = new Customer("Dope", "Boy Magic", "0775555555", "Premium")

console.log(customer_1)

console.log(customer_1.greeting())

function Client(first_name, last_name, phone, membership) {
  Person.call(this, first_name, last_name);
  this.phone = phone
  this.membership = membership
}
// Inherit the Person prototype methods
Client.prototype.constructor = Object.create(Person.prototype)

// Make Client.prototype return Person ()
Client.prototype = new Person()

// Create client
const client_1 = new Client("The", "Makmende", "0777777777", "Standard");

console.log(client_1);
console.log(client_1.greeting());

class AwesomePerson extends Person {
  constructor(first_name, last_name, mission, vision) {
    super(first_name, last_name);
    this.mission = mission;
    this.vision = vision;
  }
}

const sam = new AwesomePerson("Sam", "Ngigi", "Rest in Abba's Love and Grace", "First world United Africa.")
console.log(sam);
// We are able to use the greeting method because we inherit this prototype from Person.
console.log(sam.greeting());
/* 
  We can override the Person prototype. Example below where we override the Person greeting
  function with our own.
*/
AwesomePerson.prototype.greeting = function () {
  return `Hi there ${this.first_name} ${this.last_name}. Welcome to the best years of your life! ${this.mission}.`
}
console.log(sam.greeting());