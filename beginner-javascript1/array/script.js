let names = ['Danny', 'Joe', 'Sarah', 'Molly'];

let names2 = ['John', 'Tom'];

let names3 = ['Delia', 'Smith'];

// splice
let slice = names.slice(1, 3); 

// spread operator ==> create a copy of an array

let namesCopy = [...names];

let stringNames = names.toString();
console.log(stringNames); // Danny,Joe,Sarah,Molly
console.log(names.join(','));

console.log(names.concat(names2, names3)); // ['Danny', 'Joe', 'Sarah', 'Molly', 'John', 'Tom']
console.log(namesCopy);
console.log(slice);
console.log(names.indexOf('Joe'));