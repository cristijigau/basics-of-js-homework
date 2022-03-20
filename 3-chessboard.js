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

const chessBoard = (r, c) => {
  let str = "";
  let counter = 1;
  const size = r * c;
  for (let i = 1; i <= size; i++) {
    if (counter === 1) {
      str += i % 2 !== 0 ? "#" : " ";
    }
    if (counter === 0) {
      str += i % 2 === 0 ? " " : "#";
    }
    if (i % c === 0 && i > 0) {
      str += "\n";
      counter++;
    }
    if (counter % 2 === 0 && counter !== 0) {
      str += " ";
      counter = 0;
    }
  }
  return str;
};

console.log(chessBoard(8, 8));
