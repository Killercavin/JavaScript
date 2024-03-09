let names = 'Jane Doe';

let regex = /O/;

let output = regex.test(names);

if (output) {
    console.log('The name contains the letter O');
}

else {
    console.log('The name does not contain the letter O');
}

console.log("Done!");