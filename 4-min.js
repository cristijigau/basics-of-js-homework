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



// function getMin(...args) {
// 	args = args.sort((a,b) => a - b)
// 	console.log(args[0])
// }

// getMin(0, -50)

function  min(...args) {
	for (let i = 0; i < args.length; i++) {
		for (let j = 0; j < args.length - i - 1; j++) {
			args[j + 1] < args[j] && ([args[j + 1], args[j]] = [args[j], args[j + 1]])  
		}
	}
	console.log(args[0])
}

min(9784, -848, -848.5, 151, -1.5, 855, 0)