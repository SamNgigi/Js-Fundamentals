// GLOBAL SCOPES
var a = 1;
let b = 2;
const c = 3;

console.log(`Global Scope:  \n var = ${a}, \n let = ${b}, \n const = ${c}`);

// FUNCTION SCOPE
(function () {
    var a = 4;
    let b = 5;
    var c = 6;
    console.log(`Function Scope:  \n var = ${a}, \n let = ${b}, \n const = ${c}`);
})()
// BLOCK SCOPE
if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`Block/If Scope:  \n var = ${a}, \n let = ${b}, \n const = ${c}`);
}

// LOOP SCOPE With let
for (let a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
} // Global let does not change.
// LOOP SCOPE With var
for (var a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
} // Global var changes according to loop

console.log(`Global Scope:  \n var = ${a}, \n let = ${b}, \n const = ${c}`);
/* 
    Globally var = 1 originally but after the block var
    declaration var = 7.

    let and const's values remain how they were globally
    declared.

    Let and Const both have block level scope.
*/