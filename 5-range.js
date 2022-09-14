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

const range = function (start, end) {
  let rangeArr = [];
  if (start < end) {
    for (let i = start; i <= end; i++) {
      rangeArr.push(i);
    }
  } else {
    for (let i = start; i >= end; i--) {
      rangeArr.push(i);
    }
  }
  return rangeArr;
};

const sum = function (arr) {
  return arr.reduce((a, v) => a + v);
};

const stepRange = function (start, end, step) {
  let rangeArr = [];
  let resultStepArr = [];
  let stepAbs = Math.abs(step);
  if (start < end) {
    for (let i = start; i <= end; i++) {
      rangeArr.push(i);
    }
  } else {
    for (let i = start; i >= end; i--) {
      rangeArr.push(i);
    }
  }
  if (!step) return rangeArr;
  for (let i = 0; i < rangeArr.length; i++) {
    if ((stepAbs - i) % stepAbs === 0) resultStepArr.push(rangeArr[i]);
  }
  return resultStepArr;
};

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
console.log(stepRange(1, 10, 2));
console.log(stepRange(5, 2, -1));
console.log(stepRange(1, 10));

//
// console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// → 55
