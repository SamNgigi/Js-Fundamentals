// ALSO KNOWN AS SUB-CLASSING.
class Person {
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  }
  greeting() {
    return `Hello there ${this.first_name} ${this.last_name}`;
  }
}

// Customer is a sub-class of Person.
class Customer extends Person {
  // Defining the parameters for our Customer Object.
  constructor(first_name, last_name, email, membership) {
    // We declare the properties that will be inherited from Person in the super()
    super(first_name, last_name);
    // We define the other remaining properties.
    this.email = email;
    this.membership = membership;
  }
  static getMembershipFee() {
    return '$500';
  }
}

// Instantiating a new Customer.
const fatuma = new Customer("Fatma", "Whiteweather", "fatmaWhiteweather@icloud.com", "Luxury");

// returns the fatuma object.
console.log(fatuma);
// returns "Hi there Fatma Whiteweather."
console.log(fatuma.greeting());
console.log(Customer.getMembershipFee());