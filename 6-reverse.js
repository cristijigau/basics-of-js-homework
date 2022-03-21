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

// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

function reverse (arr){ 
    const reversedArray = []; 
    for (let i = arr.length - 1; i >= 0; i--){
        reversedArray.push(arr[i]);
    }
    console.log(reversedArray);
}
reverse(["A", "B", "C"]);
