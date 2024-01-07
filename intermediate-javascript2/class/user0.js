class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    }
    let user = new User('Bob Marley');
    console.log(user.fullName); 
    