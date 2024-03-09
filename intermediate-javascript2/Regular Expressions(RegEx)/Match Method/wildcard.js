let message = 'The quick brown fox jumps over the lazy dog.';
let regex = /do./gi; // wildcard period matches any character

let result = message.match(regex);

console.log(result);