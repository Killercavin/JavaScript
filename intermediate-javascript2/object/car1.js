let car1 = {
	make: 'Dodge',
	model: 'Viper'
}
let car2 = Object.assign({}, car1, {model:'RAM', transmission: 'automatic'}, {color: 'red'});
car1.color = 'green';
console.log(`${car2.make} ${car2.model} ${car2.transmission} ${car2.color}`);