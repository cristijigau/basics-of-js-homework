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
const range = (start,end,ind) => {
    let a = [];
    let b = [];
    let step = ind;
    if(start < end || ind === undefined && ind >= 0){
        ind = 1
    }else if (start > end || ind ===undefined && ind<=0){
        ind =-1;
    } 
    
    if(step!==undefined && step !== 1 && step !== -1 && step !== 0){
        if(start<end){for(let i=start;i<=end; i+=step){
                b.push(i);
            }
        }else if(start>end){
            for(let i=start;i>=end; i+=step){
                b.push(i);
            }
        }else {b.push(start)}
            console.log(b)
    }
    
    
    const counter = Math.abs(((end-start)/ind)+1)
    
    for(let i=0;i<counter; i++){
        a.push(start);
        start += ind;
    }
    return a;
    }


    const sum = (array)=>{
        let sumaizer = array;
       const change = sumaizer.reduce((fElem,sElem)=>fElem+sElem);
        return change;
    }
    
    console.log(range(10,1,1));
