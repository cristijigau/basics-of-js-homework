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
function reverseArray(array){
    let reversedArray = []
    for(let i = array.length - 1; i >= 0; i--){
        reversedArray.push(array[i])
    }
    return reversedArray
}
console.log(reverseArray(["A", "B", "C"]))
// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
