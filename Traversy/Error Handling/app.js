// *Fiddling with the browser console colors
// We define some style and join them to format in a css king of way
const success = [
  "color: green",
  "display: grid",
  "justify-self: center",
  "text-decoration: underline"
].join(";")

const fail = [
  "color: red ",
  "display: block",
  "text-decoration: underline"
].join(";")

// * Producing a ReferenceError
// Try execute whatever is within the try block
try {
  // We call an error we haven 't defined yet.
  myFunction();
}
// If there's an error catch the error. 
catch (error) {
  // Color variable has to be defined at the beginning.
  console.log("%c Producing a ReferenceError", success)
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
  console.log("%c Producing a TypeError", success)
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
try {
  // *Producing a SyntaxError
  console.log("%c Producing a SyntaxError", success)
  console.log("")
  /*  
    This will be evaluated as the variable Hello World which will throw a
    syntax error because the cannot be a space in a variable name.
  */
  eval('Hello World')
} catch (error) {
  console.log(error)
}

class UserError extends Error {
  constructor(name = "UserError", message = "User has no name attribute") {
    super();
    this.name = name;
    this.message = message;
  }
}


const user = {
  email: "dude@gmail.com"
};
console.log("")
console.log("%c Producing a custom error called UserError", success)
console.log("")
try {
  if (!user.name) {
    throw new UserError()
  }
} catch (error) {
  console.log(error)
  console.log(error.name)
  console.log(error.message)
}