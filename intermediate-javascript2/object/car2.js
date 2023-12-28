let car1 = {
	make: 'Dodge',
	model: 'Viper'
}
let car2 = { ...car1, model:'RAM', color: 'red'};
car1.color = 'green';
console.log(`${car2.make} ${car2.model} ${car2.color}`);
