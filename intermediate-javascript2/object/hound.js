function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let myBird = new Bird('parrot', 'green');
console.log(`My bird is called ${myBird.name} and it has ${myBird.numLegs} legs.`);