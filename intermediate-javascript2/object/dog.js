let dog = {
    name: 'Spot',
    numLegs: 4,
    get sayLegs() {
        return `This dog has ${this.numLegs} legs.`;
    }
}
// console.log(`My dog is called ${dog.name} and it has ${dog.numLegs} legs.`);
dog.sayLegs;