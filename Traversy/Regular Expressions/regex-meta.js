// Our regex patterns
let re
// Literal Characters
// * Case sensitive
re = /hello/;
// * Case insensitive
re = /hello/i;

// Meta-character Symbols
// * Must start with 
re = /^h/i;
// * Must end with 
re = /$/i;
// * Must start and end with 
re = /^hello$/i;
/*  
 * Must start and end with given literal, and any one character in place
 * of the . is acceptable
 */
re = /^h.llo$/i;
/*  
 * Must start and end with given literal, and any 0 or more characters in
 * place of the * is acceptable.
 * Note that the * symbol will not work if the ^ is present
 */
re = /h*llo$/i;
/*  
 * Must start and end with given literal, and "e" or "a" is a valid
 * option. Pit fall is that it would allow us to also not pass a or e 
 */
re = /^gre?a?y$/i;
/*  
 * A better approach to make sure either "a" or "e" must be used is
 * through Brackets [] - Character sets. 
 */
re = /gr[ea]y/i;


// Test string
const string = 'grey'

// Log results
const result = re.exec(string)
const test = re.test(string)
console.log(test)

reTest = (re, str) => {
  // If true
  if (re.test(str)) {
    console.log(`${str} matches "${re.source}"`);
  } else {
    console.log(`${str} does NOT match "${re.source}"`);
  }
}

reTest(re, string)