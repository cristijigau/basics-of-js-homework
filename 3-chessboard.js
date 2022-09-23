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
let width = 11;
let height = 8;
res = '';

res = '';
for(i = 0; i < height; i++){
    for(j = 0; j < width; j++){
        if(res[res.length - 1] == '#'){
            res += ' ';
        }
        else if(res[res.length - 1] == ' '){
            res += '#';
        }
        else if (i == 0){
            res += '#';
        }
        else{
            if(res[res.length - 2] == ' '){
                if(width % 2 == 0){
                    res += ' ';
                }
                else{
                    res += '#';
                }
            }
            else if(res[res.length - 2] == '#'){
                if(width % 2 != 0){
                    res += ' ';
                }
                else{
                    res += '#';
                }
            }
        }
    }
    res += '\n';
}

console.log(res);
console.log(1 % 8);