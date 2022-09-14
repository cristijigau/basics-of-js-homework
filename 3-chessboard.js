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

const chessboard = function (size) {
  let str = "";
  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      str += `${"".padStart(size, "# ")}\n`;
    } else {
      str += `${"".padStart(size, " #")}\n`;
    }
  }
  return str;
};

const chessboardAnyDimensions = function (height, width) {
  let str = "";
  for (let i = 0; i < height; i++) {
    if (i % 2 === 0) {
      str += `${"".padStart(width, "# ")}\n`;
    } else {
      str += `${"".padStart(width, " #")}\n`;
    }
  }
  return str;
};

console.log(chessboard(8));
console.log(chessboardAnyDimensions(4, 20));
