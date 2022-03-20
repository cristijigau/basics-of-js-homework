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

const range = (start, end) => {
  const arr = [];
  let counter = 0;
  for (let i = start; i <= end; i++) {
    arr[counter] = i;
    counter++;
  }
  return arr;
};

const sum = (arr) => {
  let amount = 0;
  for (let i = 0; i < arr.length; i++) {
    amount += arr[i];
  }
  return amount;
};

console.log(range(1, 10));

console.log(sum(range(1, 10)));

//5.2

const rangeModified = (start, end, step) => {
  const arr = [];
  let range = step;
  let counter = 0;
  if (range === undefined) {
    if (start - end > 0) {
      range = -1;
    } else {
      range = 1;
    }
  }
  for (let i = start; range > 0 ? i <= end : i >= end; ) {
    const ext = i + range;
    const isInRange = Math.abs(range) <= Math.abs(start - end);
    if (!isInRange) {
      throw new Error("Out of range");
    }
    if (counter > 0) {
      if (range < 0 && ext < end) {
        break;
      } else if (range > 0 && ext > end) {
        break;
      } else i = i + range;
    }
    arr[counter] = i;
    counter++;
  }
  return arr;
};

console.log(rangeModified(5, 2, -1));

//
// console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// → 55
