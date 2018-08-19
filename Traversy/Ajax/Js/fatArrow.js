// Without Fat Arrow
const sayHello = function () {
  console.log("Hello");
}

sayHello();

// Using Fat Arrow V1
const sayHi = () => {
  console.log("Hi");
}

sayHi();

// Using Fat Arrow V2 
// One line functions do not need curly braces
const sema = () => console.log("Sema");

sema()

// One line returning a string.
const sup = () => 'Sup';

console.log(sup());

// Return object
const habari = () => ({
  hi: 'Habari'
});

console.log(habari());

// Single parameters do not need parenthesis
const hi = name => console.log(`Hi ${name}`);

hi('Rose');

// We wrap multiple parameters in parenthesis
const youTwo = (one, two) => console.log(`Hi ${one} and ${two}`);

youTwo('Rose', 'Jed');

// Using  callbacks
const users = ['John', 'Doe', 'Martin', 'Smith'];

const nameLength = users.map(function (user_name) {
  return user_name.length
})

console.log(nameLength);

// Using fat Arrow as a call back
const userNameLength = users.map((user_name) => {
  return user_name.length
})
console.log(userNameLength)
// or
const make_upperCase = users.map((user_name) => user_name.toUpperCase())
console.log(make_upperCase)