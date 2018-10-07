import _, {
  person
} from './app/obj';


let test = () => console.log(
  `Hello world of Webpack and Babel. My name is ${person.name}.`
)
test();
// * Here is the default function use-case.
_();