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


//4.1
const min = (a, b) =>{
    if(a>b){
        return b
    }else return a
}

console.log(min(1,8));


//4.2
// const array = [1,-2, -3, 3,4,-33, -1234,5];

// const min = (arr) =>{
//     let min=arr[0];
//     for( let i = 1; i<arr.length; i++){
//       if(min>arr[i]){
//         min=arr[i];
//       }
//     }
//     return min;
// }

// console.log(min(array));


