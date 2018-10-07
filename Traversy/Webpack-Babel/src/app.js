import _, {
  person
} from './app/obj';

// * Destructuring
const {
  name,
  location,
  age
} = person

let test = () => console.log(
  `Hello world of Webpack and Babel. My name is ${name}.`
)
test();

// * Here is the default function use-case.
_(location);

/*  
 * Below is a situation where we may need to use a babel polyfills. 
 * We will use async and await to fetch data from a rest api.
 * 
 * Without a polyfills we get the error below
 *  "Uncaught ReferenceError: regeneratorRuntime is not defined"
 * 
 * To get async and await working we have to install a babel-polyfill
 */

const getPost = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  return data
}

getPost().then(posts => console.log(posts))