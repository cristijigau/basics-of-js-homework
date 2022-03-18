/**
 * LOOPING A TRIANGLE
 *
 * to run code from this file use: npx nodemon 1-triangle
 *
 * Write a loop that makes seven calls to console.log to output the following triangle:
 #
 ##
 ###
 ####
 #####
 ######
 #######
 *
 * Try to find the most optimal way to do this.
 *
 */

// Your code here.

function createTriangle(row = 8) {
	const char = '#'
	for (let i = 0; i < row; i++) {
		for (let j = 0; j <= i; j++) {
			const line = Array(j).fill(char)
			console.log(line.join(''))
		}
	}
}

createTriangle()