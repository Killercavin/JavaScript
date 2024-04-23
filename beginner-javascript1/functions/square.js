function square(num){
	let square_number = (num**2);
	return console.log(`The square of ${num} is`, square_number);
}

square(15);


const makeNoise = () => {
	return console.log("Pling!");
}

makeNoise();


const power = function(base, exponential){
	result = (base ** exponential);

	return console.log(`${base} raised power ${exponential} is ${result}`);
}

power(8, 2);


const minus = (a, b) =>{
	let result = (a - b);
	if (b != undefined){
		return console.log(`The result of ${a} - ${b} is ${result}`);
	}
	else{
		return console.log(-a);
	}
}

minus(9, 3);



const firmInvoice = (cows, chickens) => {
	let cowString = String(cows);
	let chickenString = String(chickens);
	while (cowString < 3){
		cowString = ("0" + cowString);
	}

	while (chickenString < 3){
		chickenString = ("0" + chickenString);
	}

	console.log(`cowString ${cowString} \nchickenString ${chickenString}`);

}

firmInvoice(3, 90);