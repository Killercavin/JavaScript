function myTrue(){
	let a = true && 20;
	let b = 0 || 20
	let c = 0 && 20;
	return console.log(`${a} ${b} ${c}`);
}

myTrue();