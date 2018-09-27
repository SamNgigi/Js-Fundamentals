// Console colors
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

let re, reg, result_1, result_2, result_3;

// Assigning variable re to a regular expression literal
re = /hello/
// Making our regex case insensitive, we add an i
reg = /hello/i;
// Allowing our regex to match all similar instances we add a g
regEx = /hello/g;


// * returns /hello/
console.log(re);
// * returns hello
console.log(re.source);

const string_1 = "Hello world";
const string_2 = "Hi world";
const string_3 = "hello anyone, hello?"
const string_4 = "Can i here a hello one more time"

/*  
 * exec() - returns an array of the matched expression the index, its
 * starting index and the input string
 * 
 * Otherwise if there is no match in the string it returns null
 */

result_1 = re.exec(string_1)
result_2 = reg.exec(string_1)
/*  
  We want to match regex hello.Note that it is case sensitive.

  That is why the output below is null.
*/
console.log("")
console.log("%c The exec() method", success);

console.log(result_1);
// returns result array due to using case insensitivity
console.log(result_2);
// returns the first index of the our regex occurring
console.log(result_2);
// returns hello
console.log(result_2[0]);
// returns 0
console.log(result_2.index);
// returns our input string
console.log(result_2.input);

result_1 = re.exec(string_2);
// returns null
console.log(result_1);

result_1 = re.exec(string_3);
result_3 = regEx.exec(string_3);
console.log(result_1);
console.log(result_1.index);
console.log(result_1.input);
// No difference.
console.log(result_3)


result_1 = re.exec(string_4);
// returns the first index of the our regex occurring
console.log(result_1);
console.log(result_1[0])
console.log(result_1.index)
console.log(result_1.input)

console.log("")
console.log("%c The match() method", success)
/*  
 * match() method works exactly like the exec(). It returns an array or
 * null.
 * The syntax changes slightly as we compare our string against our re
 * i.e
 */
result_1 = string_1.match(re)
// returns null
console.log(result_1)
result_1 = string_1.match(reg)
/*  
 * returns array of the form
 * ["Hello", index: 0, input: "Hello world", groups: undefined]
 * which is the same as the exec return.
 */
console.log(result_1)
// returns Hello
console.log(result_1[0])



console.log("")
/*  
 * test() method returns boolean based on if our regex matches our string
 */
console.log("%c The test() method", success)

result_1 = re.test(string_1);
// returns false
console.log(result_1);

result_1 = reg.test(string_1);
// returns true because of case insensitivity.
console.log(result_1);

console.log("");
/*  
 * search() method returns index of the first match if not found it
 * returns -1
 */
console.log("%c The search() method", success);
result_1 = string_1.search(re)
// returns -1
console.log(result_1)
result_1 = string_1.search(reg)
// returns 0
console.log(result_1)
result_1 = string_4.search(re)
// returns -13
console.log(result_1)