let numbers = [10, 40, 0, 20, 50];
for (let i = 0; i < numbers.length; i ++){
	try{
		console.log((1000 / numbers[i]));
	}

	catch (e){
		continue;
	}

	/** finally{
		console.log((1000 / i));
	} **/
}