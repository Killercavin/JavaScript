let contact = {};
contact.tel = '207-662-5412'; // same as contact['tel'] = '207-662-5412'
contact.email = 'mail@dormain.dormain';
contact['firstName'] = 'Ronald';
contact.lastName = 'Murphy';
contact.email = {
	private: 'RonaldSMurphy@freepost.org',
	work: 'rsmurphy@briazz.com'
}
delete contact.email.work;
/* delete contact.keyName; or delete contact['keyName']; // to delete items from an object */

console.log(contact);

console.log(Object.isFrozen(contact)); // check if an object is extensible