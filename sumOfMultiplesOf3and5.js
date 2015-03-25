function sumOfMultiplesOf3and5() {

	a = 0;
	b = 0;
	c = 0;
	var sum = 0;
	var multiples = [];
	var mulOf3 = [];
	var mulOf5 = [];

	for (i = 0; i < 1000; i++) {
		if (i % 3 === 0 &&  i % 5 === 0) {
			multiples[a] = i;
			a++;
		}

		else if (i % 3 === 0) {
			mulOf3[b] = i;
			b++; 
		} 

		else if (i % 5 === 0) {
			mulOf5[c] = i;
			c++;
		}
	}
	
	for (i = 0; i < multiples.length - 1; i++) {
		sum += multiples[i];
	}
	
	for (i = 0; i < mulOf3.length - 1; i++) {
		sum += mulOf3[i];
	}

	for (i = 0; i < mulOf5.length - 1; i++) {
		sum += mulOf5[i];
	}
	
	console.log(sum);
}

sumOfMultiplesOf3and5();