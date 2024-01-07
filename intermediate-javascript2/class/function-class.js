function A() {};
class B extends A {};
let b = new B();
console.log(`${b instanceof A} ${b instanceof B}`);