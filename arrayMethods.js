// Arrays are 0 based.
// Creating an array.
const numbers = [5, 77, 1, 57, 11, 55, 75]
const num = new Array(1111, 11, 1, 777)
const pizza = ['BBQ Chicken', 'Meat Deluxe', 'BBQ Pork', 'Hawain']
const mixed = [75, 'Royal Cheese Burger', true, new Date(), null, {a:1, b:2}, undefined]

let res

// LENGTH
res = numbers.length // returns 7

// Check if is array/list
res = Array.isArray(numbers); // returns true
res = Array.isArray('Sup'); // returns false

//Get single value
res = numbers[5]; // returns 55
res = numbers[0]; // returns 5

// Insert into an array
num[2] = 555; // returns [1111, 11, 555, 777]. It replaces 1 with 555

//Finding the index of a value
res = numbers.indexOf(11); //returns 4. returns -1 if not found.

//MUTATING ARRAYS
//Adding to the end of an array
num.push(1); // returns [1111, 11, 555, 777, 1]
//Remove from the end.
num.pop(); // returns [7, 1111, 11, 555, 777]
// Adding to the front of an array
num.unshift(7); // returns [7, 1111, 11, 555, 777, 1]
// Remove from the front.
num.shift() // returns [1111, 11, 555, 777]

// Splice().
/*

 Takes 2 args.
   1. index to start removing from.
   2. How many to remove including the starting point
*/
num.splice(1, 2)

// Reverse()
numbers.reverse() // returns [75, 55, 11, 57, 1, 77, 5]

// Concatenating arrays
res = numbers.concat(num) // returns [75, 55, 11, 57, 1, 77, 5, 1111, 777]

//SORT-  .sort()
// Sorts alphabetically.
res = pizza.sort() // returns ["BBQ Chicken", "BBQ Pork", "Hawain", "Meat Deluxe"]
// Sorts in ascending order.
res = numbers.sort() // return [1, 11, 5, 55, 57, 75, 77] - bad sort.
/*
  The above sort is not sorting properly. It is sorting according to the
  first character in the number value.

  To make it sort properly we use the "compare function".
*/
res = numbers.sort(function(a, b) {
  return a - b;
}) // returns [1, 5, 11, 55, 57, 75, 77] - correct sort.

// Reverse sort.
res = numbers.sort(function(a, b) {
  return b - a;
})

// FIND
let nums = [5, 77, 1, 57, 11, 55, 75]
res = nums
function under50(nums) {
  return nums < 50
}
res = nums.find(under50) // finds first number in nums under 50 and returns it.
function over50(nums) {
  return nums > 50;
}

res = nums.find(over50) // finds first number in nums over 50 and returns it.


// console.log(mixed);
console.log(numbers);
console.log(num);
console.log(res);
