console.log("Sup")
// Object destructuring
const person = {
  name: "Phill",
  age: "27",
  city: "Nairobi",
  gender: "Male",
}

// ES6 Destructuring
const {
  name,
  age,
  ...stuff
} = person;

// Returns Phill 27 {city: "Nairobi", gender: "Male"}
console.log(name, age, stuff);