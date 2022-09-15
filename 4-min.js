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

const min = (arg1, arg2) => arg1 < arg2 ? console.log(arg1) : console.log(arg2)

const minArr = (arr) => {
    const sortedArray = arr.sort((a, b) => a - b)

    console.log(sortedArray[0])
    return sortedArray[0]
}

min(15, -10)
minArr([0, -10])