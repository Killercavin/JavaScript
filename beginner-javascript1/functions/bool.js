function bool(){
	let x = false || true;
	let y = "true" && "false";
	let z = false && true;
	return console.log(`${x} ${y} ${z}`);
}

bool();