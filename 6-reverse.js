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
const sourceArray = ['A', 'B', 'C'];

const reverseArray = (array) =>{
    reversed = [];
    while(array.length > 0){
        reversed.push(array.pop());
    }
    return reversed;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
