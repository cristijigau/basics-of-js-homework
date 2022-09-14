/**
 * MINIMUM
 *
 * to run code from this file use: npx nodemon 4-min
 *
 * 4.1 Write a function that will bring two Number arguments and will return the minimum of these two arguments
 *
 * 4.2 Optional: Modify the min function created before to bring an array of numbers as a
 *    single argument and return the smallest number from this array.
 *    (e.g: console.log(minArr([2, 4, -4, 10, 0, -9, 17]));  → -9
 *
 * Do not use Math.min
 */

// Your code here.
const min = function (num1, num2) {
  if (num1 < num2) return num1;
  if (num2 < num1) return num2;
};

const minArr = function (arr) {
  const min = arr.reduce((a, v) => {
    if (a < v) return a;
    if (v < a) return v;
  }, 0);
  return min;
};

console.log(min(0, 10));
console.log(min(0, -10));
console.log(minArr([2, 4, -4, 10, 0, -9, 17]));
//
// Use these commands to test your code:
//
//console.log(min(0, 10));
// → 0
// console.log(min(0, -10));
// → -10
//
