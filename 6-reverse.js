/**
 * REVERSE
 *
 * to run code from this file use: npx nodemon 6-reverse
 *
 * Write a function that takes an array as argument and produces a new array that has the same elements in the inverse order.
 *
 * Do not use Array.reverse
 */

// Your code here.
function reverseArray(arr) {
  let reverseArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }

  return reverseArr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
console.log(reverseArray(["J", "A", "V", "A", "S", "C", "R", "I", "P", "T"]));
