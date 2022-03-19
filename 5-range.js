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
//
// console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// → 55

function range(x,y, z=1){
    let arr = [];
    if(x>y){
        if(z>0){
            return '3rd argument must be negative';
        }
        for(let i=x; i>=y; i+=z){
            arr.push(i);
        }
    }else{
        if(z<0){
            return '3rd argument must be positive'
        }
        for(let i=x;  i<=y; i+=z){
            arr.push(i);
        }
    }
    return arr;
}

const sum = (arr) =>{
let summ = 0;
    for(let j of arr){
        summ+=j;
    }
    return summ; 
}

console.log(range(1,5, -1));
