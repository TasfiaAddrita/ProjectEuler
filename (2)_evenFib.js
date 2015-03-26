var a = 1;
var b = 2; 
var sum;
var sumOfEven = 0;

for (i = 1; i < 100; i++) {
	sum = a + b;

	if (sum % 2 === 0 && sum < 4000000) {
		sumOfEven = sumOfEven + sum;
	}

	a = b;
	b = sum;
}

console.log(sum)
console.log(sumOfEven);
