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

// function for two arguments
const min = (first, second) => {
    return first > second ? second : first;
}

// function for two args (1st one can be an array)
const minVer2 = (first, second) => {
    let min;
    if(Array.isArray(first)){
        min = first[0];
        first.forEach(e => {if(e < min) min = e});
        if(second !== undefined && min > second) min = second;
    } else if (second !== undefined) {
        min = first > second ? second : first;
    } else {
        min = first;
    }
    return min;
}
//
// Use these commands to test your code:
//
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(minVer2([2, 4, -4, 10, 0, -9, 17]))
//
