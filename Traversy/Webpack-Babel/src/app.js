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