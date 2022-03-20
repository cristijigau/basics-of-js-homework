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
    let newArray = [];
    for(var i = array.length-1; i >= 0; i--) {
        newArray.push(array[i]);
    }
            return newArray;
}
// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
console.log(reverseArray(["A", "B", "C"]));