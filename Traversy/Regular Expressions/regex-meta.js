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
 * option. Pit fall is that it would allow us to also not pass a or e.
 * 
 * This regex works best for Mr or Mrs. In my understanding i think the
 * optional meta-data works well if its just one char. If its one or more
 * char that are optional it is better to use brackets.
 */
re = /^gre?a?y$/i;
// * Optional s and .
re = /^Mrs?.?$/i;
/* 
 * Brackets [] - Character sets.
 * A better approach to make sure either "a" or "e" Must be used in grey
 * is through []
 */
re = /gr[ea]y/i; // Must be an a or e
/*  
 * Must be a "G" or "F". Note: case sensitive.
 */
re = /[GF]ray/;
/*  
 * Match anything except "G" or "F". Note: case sensitive. This means
 * that we can replace "G" or "F" with anything we want. We can't have it
 * as "ray" though.
 */
re = /^[^GF]ray/;
// * Match any uppercase letter.
re = /[A-Z]ray/;
// * Match any lower letter.
re = /[a-z]ray/;
// * Match any letter.
re = /[a-z]ray/i;
re = /[A-Za-z]ray/;
// * Match any number.
re = /^072[0-9]/

/* 
 * Braces {} - Quantifiers
 * Character before the curly brace must occur exactly {m} amount 
 */
re = /Hel{2}o/i;
// * Character before has to occur {m, n} amount of times. Note: No spaces
re = /Hel{2,3}o/i;

// * Character before has to occur at least {m,} amount of times.
re = /Hel{2,}o/i;

/*  
 * Parentheses () - Grouping
 * Matching any number between 0-9 followed by -, 3 times
 */
re = /^(-[0-9]){3}$/
// This is what i was looking for to either return Ryan or Brian
re = /^(R|Br)yan$/
re = /^(Ms|Mr|Mrs).?$/

/*  
 * 
 */




// Test string
const string = 'Mrs.'

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
  // Returns null when no match is found.
  console.log(result)
}

reTest(re, string)