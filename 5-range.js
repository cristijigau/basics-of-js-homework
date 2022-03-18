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


function range(...arg) {
	const [ , , step = 0 ] = arg;
	return step >= 0
		? isStepPositive(arg)
		: isStepNegative(arg)
}

function isStepPositive(argArr) {
	let [ start, end, step = 0 ] = argArr;
	const arr = []
	start > end && (start = argArr[1], end = argArr[0])

	step === 1 || step === 0 
		? step = 0
		: arr.push(start)

	for (let i = start, index = 0; i <= end; i++) {
		index > step - 1
			? (arr.push(i), index = 1)
			: ++index
	}
	return arr
}
function isStepNegative(argArr) {
	let [ start, end, step = 0 ] = argArr;
	const arr = []
	start > end && (start = argArr[1], end = argArr[0])

	step === -1
		? (step = 0)
		: arr.push(end)

	for (let i = end, index = 0; i >= start; i--) {
		index <= step
			? (arr.push(i), index = -1)
			: --index
	}
	return arr
}

function sum(arr) {
	let sum = 0 
	for (let i = 0; i < arr.length; i++ ) {
		sum += arr[i]
	}
	return sum
}

const test = [1, -10, -2] //also work with negative [start / end]

console.log(range(...test))
console.log(sum(range(...test)))
