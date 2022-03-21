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

const createChessboard = (size = 8) => {
  const chessBoard = []
  for (let i = 1; i <= size; i++) {
    const isEven = Boolean(i % 2)

    if (isEven) {
      chessBoard.push(createEvenRow(size))
    } else {
      chessBoard.push(createOddRow(size))
    }
    // chessBoard.push(createRow(size, isEven))
  }
  console.log(chessBoard.join('\n'))
}

function createRow(lengthRow, isEven = true) {
  const row = []
  for (let i = 0; i < lengthRow; i++) {
    i % 2
      ? row.push(isEven ? ' ' : '#')
      : row.push(isEven ? '#' : ' ') 
  }
  return row.join('')
}
const createEvenRow = (size) => createRow(size)
const createOddRow = (size) => createRow(size, false)

createChessboard(8)
