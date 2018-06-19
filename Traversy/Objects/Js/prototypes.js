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
  }
}

// Calculate age prototype
Person.prototype.calc_age = function () {
  const diff = Date.now() - this.birth_date.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Full name prototype
Person.prototype.full_name = function () {
  return `${this.first_name} ${this.last_name}`
}

// Last name change
Person.prototype.last_name_change = function (new_last_name) {
  this.last_name = new_last_name;
}

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
console.log(john.calc_age()); // returns 236
console.log(john.full_name()); // 'John Walk'

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
console.log(alice.calc_age()); // returns 153
console.log(alice.full_name()); // Alice Wonder
alice.last_name_change('Whodat')
console.log(alice.full_name()); // Alice Whodat.

/* 
  So a lot of the tutorials i have encountered talk plenty about the relationship between objects and their prototypes.
  
  Now it seems prototype allow for inheritance in a big way. So for starters everything is an object in JavaScript.

  Object () , Functions(), Numbers(), Strings(), Array(), Mine().

  Now all the objects have properties and methods attached with them. For example,
    Say i had a car object. I can do this in a variety of ways.

    1. OBJECT LITERAL WAY
        let myCar = {
            name: Mercedes,
            color: black
        }

    2.FACTORY FUNCTION WAY
        function Car(name, color) {
          return {
            name,
            color,
          }
        }

        let myNewCar = Car('Mclaren', 'Black')

    3. CONSTRUCTOR WAY
        I) function Car (name, color) {
            this.name = name;
            this.color = color;
        }
          let myCar = new Car('Mercedes','black');

        II) class Car{
          constructor (name, color) {
            this.name = name;
            this.color = color;
          }
        }
          let myOtherCar = new Car('G-Wagon', 'black');
        

  First of all it should be noted that 
   a) A property is a regular variable defined within an object
   b) A method is a regular function defined within an object.
   c) A constructor is a regular function that is used to create object instances.

  So something that is see is emerging is that JavaScript mainly deals with objects and not with classes.

  With Es6 the constructor is meant to accommodate people familiar with
  classes but it seems it is not. 

  In Js objects are created by other objects. And in this case a special kind of function a constructor whereby we use the key word 'new' to indicate that this is a special function. A constructor.

  And because of this JavaScript does not use a class based inheritance
  system. It uses a prototype-base inheritance system
  
  So what are prototypes?

  So in my very vague definition prototype is where all an
  objects methods are stored.

  To put it another way a an objects delegates everything to do with functionality to the prototype.

  To add it is where inheritable functionality is located.

  For example:
*/

function Plant() {
  this.country = 'Mexico';
  this.isOrganic = true;
}

// We add a show name and color method to plant prototype property.

Plant.prototype.show_name_and_color = function () {
  /* 
    We do not need to add name and color params to a prototype since the are defined in the constructor.
  */
  console.log(`i am a ${this.name} and my color is ${this.color}`);
}

// We add the i am organic method to the Plant prototype property.

Plant.prototype.organic_baby = function () {
  console.log("I am organic baby!");
}

function Fruit(fruit_name, fruit_color) {
  this.name = fruit_name;
  this.color = fruit_color;
}

/*  
  Setting all the Fruit's prototype to the Plant constructor, allowing the Fruit to inherit all the Plant prototype methods and properties.
*/
Fruit.prototype = new Plant();
console.log(Fruit.prototype)

/* 
  Creating an object instance from the Fruit constructor.
  In doing so we inherit all the properties and methods from Fruit. Remember also that Fruit inherited from Plant. 
  
  Therefore all methods and properties from Plant are also accessible to
  a_banana.
*/
const a_banana = new Fruit('Banana', 'Yellow');
console.log(a_banana.name) // Banana
console.log(a_banana) // Banana
// Below code executes line 150.
// It returns 'i am a Banana and my color is Yellow'
console.log(a_banana.show_name_and_color())

/*
  What is the prototype used for?
  I. Prototypes (prototype property) is the principal manner in which inheritance is implemented in JS as shown in example above.

  II. Prototype (prototype attribute) is also used for accessing an objects properties and methods.
  This is where by using the prototype attribute where can return properties and objects from the parent they were defined in.

  NOTE:
    We cannot mix up the way constructors are build. If we do we get wierd syntax errors.
*/