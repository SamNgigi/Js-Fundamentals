/* 
 WINDOW OBJECT.
    The window is the global object in client side JS.
*/
// WINDOW METHODS/ OBJECT / PROPERTIES

/*
METHODS

Log
window.console.log('Sup') // a.k.a console.log()

Alert
alert('Sup!')

Prompt
const input = prompt();
alert(input); 

Confirm

if (confirm('How you doing?')) {
    console.log('Ok i guess?');
} else {
    console.log('Not soo good.');
}
*/

// PROPERTIES
let val;
// Outer height and width
val = window.outerHeight;
// returns the outer height of your browser window at any given point
val = window.outerWidth;
// returns the outer width of you browser window at any given time

// Inner height and width.
val = window.innerHeight;
// returns the outer height of your browser window at any given point
val = window.innerWidth;
// returns the outer width of you browser window at any given time

// Scroll points
val = window.scrollY;
// returns scroll bar position in  regards to height. Default is 0 when we have no where to scroll to or at the top of the page

val = window.scrollY
// returns scroll bar position in  regards to width. Default is 0 when we have no where to scroll to or at the top of the page

//Locatin Object
val = window.location // returns the whole location object
val = window.location.hostname // returns the main domain/hostname
val = window.location.port; // returns port i.e 5500
val = window.location.href // returns href data.
val = window.location.search // returns query from the url.

// Redirect
// window.location.href = 'http://google.com' // returns google site.
// Reload
// window.location.reload() // would reload the page
// History
window.history.go(-2);
// would go throught the history of sites. Starting from -1
val = window.history.length; // returns int representing number of sites in our history.

// Navigator Object
val = window.navigator; // returns the navigator object.
val = window.navigator.appName; // returns the NetScapes unless on IE
val = window.navigator.appVersion; // version of browser
val = window.navigator.userAgent // reeturns other browser agents
val = window.navigator.vendor // returns Google Inc
val = window.navigator.platform // returns os.
val = window.navigator.language // returns en-Us

console.log(val);