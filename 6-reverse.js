/**
 * REVERSE
 *
 * to run code from this file use: npx nodemon 6-reverse
 *
 * Write a function that takes an array as argument and produces a new array that has the same elements in the inverse order.
 * 
 * Do not use Array.reverse
 */

const reverseArray = (arr = ["A", "B", "C"]) => {
    const reversedArray = []
    for(let i = arr.length; i > 0; i--){
        reversedArray.push(arr[i - 1])
    }

    console.log(reversedArray)
}

reverseArray()

// Your code here.

// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
