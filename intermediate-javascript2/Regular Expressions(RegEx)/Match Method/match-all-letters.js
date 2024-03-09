let message = 'I love programming in Javascript, python, c, cshap, cpp, java, php, perl, rust, go';
let regex = /[aeiou]/gi; // will match all the vowels
let result = message.match(regex);
console.log(result);