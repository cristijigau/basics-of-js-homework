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

// let chessboard = (width,height)=>{
// let upsquare = '#'
// let square = ' #'
//     for(i=0;i<height;i++){
//         if(i%2 === 0){
//             console.log(upsquare.padEnd(width, ` #`));
//         }else {console.log(square.padEnd(width, ` #`))};
//     }

// }


let chessboard = (width,height)=>{
    let content='';
    
    for(let i=0; i<height; i++){
        let lineSquare='';
        let upsquare='';
        for(j=0;j<width;j++){
           content=((i+j)%2 === 0)?lineSquare+=`# `:upsquare+=` #`
        }
        console.log(content)
    }
   
    
}


chessboard(3,3);
