// For-in-loops\ is designed to loop over an object and its properties.
console.log("for-in-loop");
const persons = {
  first: "J.F. Kennedy",
  last: "Benjamin Netanyahu"
};
for(let person in persons){
  console.log(person);
}
// outputs. the properties.
// firs
// last

// For-of-loops allows us to easily loop over arrays.
console.log("");
console.log("for-of-loop");
const numbers = [1,2,3,4,5,6,7];
for(let num of numbers){
  console.log(num);
};
