const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};

person.name;
person.name[0];
person.age;
person.bio();
person.introduceSelf();

person.age = 45;
person["name"]["last"] = "Cratchit";

person.age;
person["name"]["last"];


person["eyes"] = "hazel";
person.farewell = function () {
    console.log("Bye everybody!");
};

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

let loopKey = () => {
    for(i in Object.keys(person))
    {
        if (i == 'farewell') {
            console.log("Good it's a farewell!");
        }
    }
}

person.farewell();

loopKey();

// That loop doesn't do what I expected it to so still figuring out the solution to it...