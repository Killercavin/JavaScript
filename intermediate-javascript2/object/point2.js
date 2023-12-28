let point = {
	x: 100,
	y: 200,
	// Insert line of code here.
	set positionX(x) {this.x = x;}
}
point.positionX = 0;
console.log(point.x)
