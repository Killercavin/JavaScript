let message = 'The quick brown fox jumps over the lazy dog.';
let regex = /quick | fox | fast| slow | apply/;

// returns true if one of the strings are found or matched in the message variable

let result = regex.test(message);
console.log(result);