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

const reverse = (arr) => {
  let result = [];
  for (let i = arr.length - 1, j = 0; i >= 0, j < arr.length; i--, j++) {
    result[j] = arr[i];
  }
  return result;
};

console.log(reverse(["A", "B", "C"]));

// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
