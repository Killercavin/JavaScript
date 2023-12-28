let car = { 
	make: 'Dodge',
	model: 'Viper'
}
// Insert line of code here.
// Object.seal(car);
// Object.freeze(car);
Object.preventExtensions(car);
delete car.model; 
car.make = 'Toyota'; 
car.color = 'red'; 
console.log(`${car.make} ${car.model} ${car.color}`); 
