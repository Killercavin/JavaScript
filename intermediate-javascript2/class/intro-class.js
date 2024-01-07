class Me{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get myInfo(){
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
}

let me0 = new Me('John Doe', 25);
let me1 = new Me('Jane Doe', 24);

console.log(me0.myInfo);
console.log(me1.myInfo);