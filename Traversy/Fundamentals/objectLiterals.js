// When we don't add a comma to separate properties of an Object Literal
// This error is thrown. Uncaught SyntaxError: Unexpected identifier
const person = {
  firstName: 'Jedi',
  lastName: 'Meilsoir',
  age: 50,
  hobbies: ['music', 'reading', 'art', 'eating', 'learning'],
  address: {
    city: 'Nairobi',
    country: 'Kenya'
  },
  getBirthYear: function() {
    // return 1966 --> We could also do
    // return 2017 - age --> This throw an error. ReferrenceError: age is not defined.
    return 2018 - this.age
  }
}


let val;

val = person; // returns object Literal {firstName: 'Sam'}

// Get specific value
val = person.firstName; // returns Jedi
// or
val = person['lastName']; // returns Meilsoir
val = person.age; // returns 52
val = person.hobbies[3]; // returns eating
val = person.address.city; // returns Nairobi
val = person.address['country']; // returns Kenya;
val = person.getBirthYear();


console.log(val);


const people = [
  {name: 'Jed', age: 52},
  {name: 'Rose', age: 47},
  {name: 'Hailey', age: 14}
];

for(let i=0; i<people.length; i++) {
  // console.log(people[i].name); // returns Jed, Rose, Hailey
  console.log(people[i]['age']); // returns 52, 47, 14
}

/*
GDPR (GENERAL DATA PROTECTION REGULATION) - Updated consumer data privacy rights
  - Neccassitates tech firms to unambigously seek consent from the user to track and sell their data.
  - For those who opt in they can opt out at anytime and their data to be forgotten
  - That users can actually sell their data and get compensated.
  - A breach could see severe penalties up to 4% of the worlwide turnover / 20 million euros.

*/
