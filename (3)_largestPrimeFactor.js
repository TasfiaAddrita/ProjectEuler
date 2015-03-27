/*
Problem 3: 

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143?
*/

var a = 0;
var primeFactors = [];

for (i = 0; i <= 600851475143; i++) {
	if (600851475143 % i === 0) {
	    if (i / 1 === i && i / i === 1) {
	        primeFactors[a] = i;
	        a++;
	    }
	}
}

console.log(primeFactors[primeFactors.length - 1]);