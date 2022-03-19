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
const reverseArray = (array) => {
            let newArray = array.map(array.pop,[...array])
            return newArray;
}
// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
console.log(reverseArray([1,2,3,4,5,6]));