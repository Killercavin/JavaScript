let user1 = {
	name: 'Ian',
	age: 44
}
let user2 = user1;
user2.age = 40;
console.log(`${user2.name} ${user1.age}`);
