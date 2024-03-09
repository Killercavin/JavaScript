let message = '3 blind mice.';
let regex = /[^0-9a-z]/gi;

// let regex = /\w/gi;
let result = message.match(regex);
console.log(result);
console.log(regex.test(message));