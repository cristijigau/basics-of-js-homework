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
function reverseArray(array) {
  var reversedArray = [];
  while ((i = array.pop())) reversedArray.push(i);
  return reversedArray;
}
console.log(reverseArray(["a", "b", "c", "d", "e"]));
