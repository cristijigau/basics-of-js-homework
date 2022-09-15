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
//
// Use these commands to test your code:
//
//console.log(min(0, 10));
// → 0
// console.log(min(0, -10));
// → -10
//


function minNum(first, second){
    return first > second ? second : first
}


function minNum(arr){
    let min = arr[0];
    for(let i = 1; i<=arr.length; i++){
        min > arr[i] ? min=arr[i] : min ??????continue?
    }
    return min
}
