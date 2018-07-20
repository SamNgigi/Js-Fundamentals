// Person Constructor
function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

// Greeting method.
Person.prototype.greeting = function () {
  return `Hello there ${this.first_name} ${this.last_name}`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());
console.log(person1);

// Customer Object

class Customer extends Person {
  constructor(phone, membership) {
    /* 
      From the person constructor.
      Inherits the properties from Person constructor but not the
      prototype.
    */
    super(phone, membership);
    this.phone = phone
    this.membership = membership
  }
}

// Creating the Customer

const customer_1 = new Customer("Dope", "Boy Magic!", "0775555555", "Premium")

console.log(customer_1)

console.log(customer_1.greeting())

function Client(first_name, last_name, phone, membership) {
  Person.call(this, first_name, last_name);
  this.phone = phone
  this.membership = membership
}
// Inherit the Person prototype methods
Client.prototype.constructor = Object.create(Person.prototype)

// Make Client.prototype return Customer ()
Client.prototype = new Person()

// Create client
const client_1 = new Client("The", "Makmende", "0777777777", "Standard");

console.log(client_1);
console.log(client_1.greeting());