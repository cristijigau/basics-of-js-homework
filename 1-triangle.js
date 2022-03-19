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

let x = '#';
while(x.length<8){
    console.log(x);
    x +='#';
}
 
//2nd Variant
// let x = '#';
// for(let i = 1; i<8; i++){
//     console.log(x);
//     x+ ='#';
// }









