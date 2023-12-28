let Point = function(x, y) {
	this.x = x;
	this.y = y;
}
let point = new Point(0, 0);
let ColorPoint = function(color) {
	this.color = color;
}
// Insert line of code here.
ColorPoint.prototype = point;
let cpoint = new ColorPoint('red');
console.log(cpoint.x);
