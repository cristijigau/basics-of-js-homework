/**
 * FIZZ_BUZZ
 *
 * to run code from this file use: npx nodemon 2-fiz-buzz
 *
 * Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
 * For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 *
 * When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
 * (and still print "Fizz" or "Buzz" for numbers divisible by only one of those)
 *
 *
 */

// Your code here.

function FizzBuzz(num) {
	for (let i = 0; i <= num; i++) {

		switch (true) {
			case (!Boolean(i % 3) && !Boolean(i % 5)): 
				console.log('FizzBuzz', i)
				break
			case (!Boolean(i % 3)):
				console.log('Fizz', i)
				break
			case(!Boolean(i % 5)): 
				console.log('Buzz', i)
				break
			default: console.log(i)
		}
	}

}

FizzBuzz(100)

