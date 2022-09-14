/**
 * CHESSBOARD
 *
 * to run code from this file use: npx nodemon 3-chessboard
 *
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
 * At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 * Passing this string to console.log should show something like this:
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 *
 * When you have a program that generates this pattern, define a binding size = 8 and change the program so
 * that it works for any size, outputting a grid of the given width and height.
 *
 */

// Your code here.
const grid = 8
let chessboard = ''

//Row
for(let i = 1; i <= grid; i++){
    //Column
    for(let j = 1; j <= grid; j++){
        ((i + j) % 2 === 0) ? chessboard += '#' : chessboard += ' '
    }

    chessboard += '\n'
}

console.log(chessboard)
