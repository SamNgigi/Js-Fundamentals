let res;
res = document; // returns the whole html structure
res = document.all; // returns the DOM tags in like an array type manner.
res = document.all[0] // returns the html tag
res = document.all[1] // returns the head tag
res = document.all[2] // returns the meta tag
res = document.all.length; // returns how many tags there are in the DOM.
res = document.head; // returns the head tag
res = document.body; // returns the body tag
res = document.all[13]; // returns the div class card-content
res = document.domain // returns the web address. 127.0.0.1 for localhost.
res = document.URL; // returns the protocol, domain, port and page.
res = document.characterSet; // returns UTF-8
res = document.contentType; // returns text/html

// SELECTING STUFF WITHOUT SELECTORS
res = document.forms; // returns the HTMLCollection for the forms tag.
res = document.forms[0]; // returns the first form tag.
res = document.forms[2]; // returns 2nd form tag or undefined if no 2nd form
res = document.forms[0].id; // returns task-form
res = document.forms[0].method; // returns get
res = document.forms[0].action; // returns the url endpoint.

res = document.links; // returns all the a tag tags
res = document.links[0]; // returns the first a link tag
res = document.links[0].className; // returns the first a link tag
res = document.links[0].classList; // returns the classes defined in an tag.
res = document.links[0].classList[0] // returns the first class defined within an tag. In this case delete-items
res = document.images; // returns am array/HTML Colllection images within the document. In this case none.
res = document.scripts; // returns a list with all the scripts object. In our case 3. JQuery, Materialize and Custom js
res = document.scripts[2].getAttribute('src') // returns document.js

let scripts = document.scripts;
// scripts.forEach(function (script) {
//   console.log(script);
//   // Throws Uncaught TypeError:scripts.forEach is not a function.
// }); 
let scriptsArray = Array.from(scripts)
// converts HTMLCollection in an Array.
scriptsArray.forEach(function (script) {
  // let scriptSource = script.getAttribute("src")
  console.log(script);
  // console.log(scriptSource);
  // console.log(script.getAttribute('src')); // returns the src

});
// Returns the script files in our DOM one by one.


console.log(res);