// function to get the meanTemp && sum of the tempratues

function temp(){
	let temperatures, sum, meanTemp;
	temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
	sum = 0;
	for(let i = 0; i < temperatures.length; i++){
		sum += temperatures[i];
	}

	console.log(`Total temperatures for the region is ${sum}`);

	totalTemp = temperatures.length;

	meanTemp = sum / totalTemp;

	return console.log(`The mean temperatures for the region is ${meanTemp}`);
}

temp();
