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

function reverseArray(array){

    let revArray = [];
    let length = array.length-1;

    for(let i = 0; i < array.length; i++){

        revArray[i] = array[length];
        length--;
    }

    return revArray;
}

console.log(reverseArray(["A", "B", "C"]));