const name = 'Jed';
const age = 28;
const skills = 'Software developer'
const city = 'Nairobi'

// Without template strings/es5
html = '<ul><li>Name: ' + name + '</li><br><li>Age: ' + age + '</li><br><li>Skills: ' + skills + '</li><br><li>City: ' + city + '</li></ul>';

// or
html = '<ul>' +
        '<li>Name: ' + name + '</li><br>' +
        '<li>Age: ' + age + '</li><br>' +
        '<li>Skills: ' + skills + '</li><br>' +
        '<li>City: ' + city + '</li>' +
        '</ul>'


// TEMPLATE LITERALS
// With template literals/ template strings / es6.

function sup() {
  return 'Sup Fam!'
}
// Writing to html made easier.

html = `
  <ul>
    <li>Name: ${name}</li><br>
    <li>Ages: ${age}</li><br>
    <li>Skills: ${skills}</li><br>
    <li>City: ${city}</li><br>
    <li>Result of an addition: ${2 + 2}</li><br>
    <li>Function that returns: ${sup()}</li><br>
    <li>Conditional expression: ${age > 30? 'net work $600 trillion': 'On my way to $600 trillion net worth '}</li><br>
  </ul>

`
document.getElementById("templateLiterals").innerHTML = html

// Subscription based technology solution-  Chamath Palihapitiya -- the future?
