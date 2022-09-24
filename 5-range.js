// NEED FIX


/**
 * RANGE
 *
 * to run code from this file use: npx nodemon 5-range
 *
 * 5.1 Write a function that takes two arguments, start and end, and returns an array
 *    containing all the numbers from start up to (and including) end. Next, write a sum
 *    function that takes an array of numbers and returns the sum of these numbers.
 *
 * 5.2 Optional: As a bonus assignment, modify your range function to take an optional
 *    third argument that indicates the “step” value used when building the array. If no
 *    step is given, the elements go up by increments of one, corresponding to the old behavior.
 *    The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with
 *    negative step values so that range(5, 2, -1)
 *
 */

// Your code here.
//5.1
function range(start, end){
    let array = []
    for(let i = start; i <= end; i++){
        array.push(i)
    }
    return array
}
function sum(array){
    let result = 0
    for(let i = 0; i < array.length; i++){
        result += array[i]
    }
    return result
}
//console.log(sum(range(1, 10)))

//5.2
function rangeAdvanced(start, end, step = start < end ? 1 : -1){
    let resultArray = []
    if(step > 0){
        for(let i = start; i <= end; i += step){
            resultArray.push(i)
        }
    }else{
        for(let i = start; i >= end; i += step){
            resultArray.push(i)
        }
    }
    return resultArray
}
console.log(rangeAdvanced(5, 2, -1))


// console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// → 55

// ------------------------------------Feedback------------------------------------

// Very good! Good code readability, great solutions!
// You've met all the requirements and did the optional part as well.

// There are 2 more cases that could've been handled but they were not mentioned in the requirements so no worries.
// Just wanted to let you know in case you didn't notice them

// console.log(range(2, 5, -1));
// console.log(range(5, 2, 1));
