const num = 100;
const number = 150;
// = is assigning
// == checks for equality

// EQUAL TO VALUE AND TYPE
// Returns Yup
if(num === 100) {
  console.log('YUP');
} else {
  console.log('NOPE');
}

// NOT EQUAL TO VALUE AND TYPE
// Returns Nope
if (num !== 100) {
  console.log('YUP');
} else {
  console.log('NOPE');
}

// TEST IF UNDEFINED/ DOES EXIST
if(typeof nums !== 'undefined') {
  console.log(`The value of num is ${num}`);
} else {
  console.log('No var num.');
}

// GREATER OR LESS THAN WITH AND &&
if (num >= 100 && number <= 150) {
  console.log('Here here');
} else {
  console.log('Nowhere here');
}

// GREATER OR LESS WITH OR ||
if (num > 99 || num < 101) {
  console.log(`Give me that ${num}%`);
} else {
  console.log(`${num}% real`);
}

// TERNARY OPERATOR
// Read as --> is this = to this, do this else do something else.
console.log(num === 100 ? 'Ternary working' : 'Ternary not working');

// WITHOUT BRACES
// Almost similiar to python.
  if(num !== 100)
    console.log("Can't work without braces");
  else
    console.log('Kumbe this works without braces');
