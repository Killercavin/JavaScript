let contact = {
	email: 'mail@dormain.dormain',
	fullName: 'John Doe',
	phoneNumber: '012-345-6789'
}

// checking for exstence

/* if (contact['email']){
	return console.log(contact.email);
} 

// checking for existence using `in` keyword

if ('notes' in contact){
	return console.log(contact.notes); // returns undefined item not found
} 


// checking for the existence using `for...in` keyword

for (i in contact){
	return console.log(i);
} */

// checking fot existence using `Object.keys` to retrieve keys from the object and `Object.values` method to retrieve the values from the object

let contactKeys = Object.keys(contact);
console.log(contactKeys);