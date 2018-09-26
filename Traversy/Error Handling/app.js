// * Producing a ReferenceError
// Try execute whatever is within the try block
try {
  // We call an error we haven 't defined yet.
  myFunction();
}
// If there's an error catch the error. 
catch (error) {
  console.warn("Producing a ReferenceError")
  console.log("")
  // * returns ReferenceError: myFunction is not defined.
  console.log(error);
  // * returns myFunction is not defined.
  console.log(error.message);
  // * returns ReferenceError
  console.log(error.name);
  // * returns true
  console.log(error instanceof ReferenceError);
  // * returns false
  console.log(error instanceof TypeError);
}
// Finally execute the code within a finally block regardless of whatever 
finally {
  // * returns Finally runs regardless of whatever.
  console.log("Final block returns this regardless of whatever errors")
}
// Below method executes because we catch the error
console.log("Program continues happily ever after!")

// Adding empty lines
console.log("")

// * Producing a TypeError
try {
  null.split("");
} catch (error) {
  console.warn("Producing a TypeError")
  console.log("")
  // * returns TypeError: cannot read property 'split' of null.
  console.log(error)
  // * returns the above but includes "-> I wrote this"
  console.log(`${error.name}: ${error.message} -> I wrote this.`)
  // * returns "It is true. You have a TypeError"
  console.log(`It is ${error instanceof TypeError}. You have a TypeError`)
  // * returns {stack:{}, message:{}}
  console.log(Object.getOwnPropertyDescriptors(error))
  /*  
   * returns the Error Object where we get the name and message from an
   * error instance.
   */
  console.log(Object.getPrototypeOf(error))
  /*  
   * returns the string version of the stacktrace. i.e
   * TypeError: Cannot read property 'split' of null at app.js: 32
   */
  console.log(error.stack)

}

console.log("")
console.log("")
try {
  // *Producing a SyntaxError
  console.warn("Producing a SyntaxError")
  console.log("")
  /*  
    This will be evaluated as the variable Hello World which will throw a
    syntax error because the cannot be a space in a variable name.
  */
  eval('Hello World')
} catch (error) {
  console.log(error)
}


// *Fiddling with the browser console colors
// We define some style and join them to format in a css king of way
const success = [
  "color: green",
  "display: block",
  "text-decoration: underline"
].join(";")

const fail = [
  "color: red ",
  "display: block",
  "text-decoration: underline"
].join(";")

// We add the %c to format the log with some style
console.info("%c Succeed in style.\n", success);
// Testing to see if it will work with console.log
console.log("%c Fail in style.", fail);