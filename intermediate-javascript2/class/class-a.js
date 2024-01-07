class A {
    getName() {
        return 'A';
    }
}
class B extends A {
    getName() {
        return 'B';
    }
    test(x) {
        return x ? this.getName() : super.getName();
    }
}

let b = new B();
console.log(`${b.test(true)} ${b.test(false)}`);