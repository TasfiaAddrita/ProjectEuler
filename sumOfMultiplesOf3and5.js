function sumOfMultiplesOf3and5() {

	a = 0;
	b = 0;
	var mulOf3 = [];
	var mulOf5 = [];

	for (i = 0; i < 1000; i++) {
		if (i % 3 === 0) {
			mulOf3[a] = i;
			a++; 
		} 

		if (i % 5 === 0) {
			mulOf5[b] = i;
			b++;
		}
	}

	console.log(mulOf3); 
	console.log(mulOf5); 
}