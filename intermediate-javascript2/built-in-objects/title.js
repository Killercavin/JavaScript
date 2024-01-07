// How to make a title case string

let myString = "this is a string";
let char0 = myString.charAt(0);
let upperChar0 = char0.toUpperCase();
let restOfString = myString.slice(1);
let titleString = upperChar0 + restOfString;
console.log(titleString);