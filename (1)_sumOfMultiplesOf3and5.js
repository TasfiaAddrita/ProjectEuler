/*
Problem 1: 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

function multiples() {
	var total = 0; // created a variable to hold the sum of the multiples of 3 and 5; currently set to 0


	/*
	Loops through 1000 numbers; if number is a multiple of 3 OR 5, it adds to the total
	*/
	for(var i = 0; i < 1000; i++) {
		if(i % 3 === 0 || i % 5 === 0) {
	    	total += i;
	    }
	}
	console.log(total); // answer is 233168
}

