function arr(){
	let x = [10, 20, 30, 40];
	let y = [50, 60];
	x.reverse().push(y);
	return console.log(x.length);
}

arr();