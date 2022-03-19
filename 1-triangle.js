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
const triangle = (num) => {
    const repeatingElement = `#`;
    for (let i = 1; i <= num; i++) {
        console.log(repeatingElement.repeat(i))
    }
}
triangle(7)