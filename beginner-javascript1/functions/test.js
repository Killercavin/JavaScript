function test(counter) {
	console.log("test");
	if (counter > 0){
		test(--counter);
	}
}
 
test(3);
