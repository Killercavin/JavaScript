let sample = 'JavaScript essentials 1 & 2';
let regex = /[0-9a-z]/gi; // '/[a-z0-9]/' too produces a similar output
let result = sample.match(regex);
console.log(result);