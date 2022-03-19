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

const array = ['a', 'b', 'c'];
const reverse = (arr) =>{
    let internalArray = [];
    for(let i = arr.length-1; i>=0; i--){
        internalArray.push(arr[i])
    }
    return internalArray;
}

console.log(reverse(array));
