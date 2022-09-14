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
//ARRAY FUNCTION
function minArr(arr) {
  return arr.reduce((cur, next) => (cur < next ? cur : next));
}

console.log(minArr([2, 4, -4, 10, 0, -9, 17]));
// Use these commands to test your code:
//
// NUMBER FUNCTION
function min(num1, num2) {
  return num1 < num2 ? num1 : num2;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
//
