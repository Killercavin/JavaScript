function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat(){
      return "num num num";
    },
    describe(){
      return `My name is ${this.name}`;
    }
  
  };