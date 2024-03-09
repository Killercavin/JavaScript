// High order arrays

let names = ['Danny', 'Joe', 'Sarah', 'Molly'];

let namesLoop = () => {
    names.forEach( n => {
        return console.log(n);
    });

}
namesLoop();

console.log("\nFor array loop is below!\n");

let forLoop = () => {
    let result;

    for(let i = 0; i < names.length; i ++){
        console.log(names[i]);
    }
}

forLoop();
