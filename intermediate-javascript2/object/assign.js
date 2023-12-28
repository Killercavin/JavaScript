let user = {
	mail: 'xyz@example.com',
	names: 'Jane Doe'
}

let client = {};
Object.assign(client, user);
console.log(client);