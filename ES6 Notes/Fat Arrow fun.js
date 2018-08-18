/*
Functions can be passed into other functions like other values.
-Below we pass an anonymous function as an argument to the setTimeout function. The anonymous function here is console.log("Ping")
*/
function ping() {
  setTimeout(function () {
    console.log("Ping");
  },1000);
};

ping(); //waits a second and then outputs ping.

/*
ES6 provides a new way to define anonymous functions. We call it fat arrow syntax(=>)
*/
function threeSecPing() {
  setTimeout(()=>{
    console.log("Ping after 3 seconds")
  }, 3000);
}
threeSecPing();
// If we only have one expression we can eliminate the curly braces all together
function twoSecPing() {
  setTimeout(()=>console.log("Ping after 2 seconds"), 2000);
}
twoSecPing();
