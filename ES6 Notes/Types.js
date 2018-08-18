/*
TypeScript performs a type check on the code.
Type defines what categoriy a variable falls in. Types of variables include;

1.Basic Type.
- Booleans
- Strings.
- Numbers.

Below we assign the variable age to the type number. If we put anyother type of value we get a TypeError.
*/
let age: number = 19;
age = "19"; //TypeError


let name:string = "James Bond";
let isMale:boolean = true;

/*
2.Array Type variables.
We can define a variable will be a function using either
-[]
-Array<number>
*/

let numbers: number [] = [1,2,4,3,5,];
let otherNumbers: num [] = [4,5,6,7,8,];

/*
3. Function.
we define a function using the Function type keyword.
*/

let funct: Function = ()=> console.log("Functioning");

/*
4.Enums
Enum are datatypes in ES6 that consist of named values that behave like constants
*/
enum Compass{
  North,
  South,
  East,
  West
}
let northStar : Compass = Compass.North;

/*
5.Class Types

We can define a variable as a type of a class by using the class naem.
*/
class Car{};
let volvo = Car;

// We can also get an array of variables that belong to that particular class
class Car{};
let bazzar : Car [];

/*
6. Any Type
 If we dont know the type a particular vaiable belongs to it can be any.
*/
let name: any = "James";
name = 1;

/*
7. Void type.
Void type is used in functions when we do not expect any return.
*/
function sayPsst():void {
  console.log("Psst");
}
console.log(sayPsst());
