let text = 'Mississippi';
let regex = /s+/gi; //matching all the multiple occurrance or repeated letters

/* 
this method too reurn an Array of repeated letters

let regex = /[i+]/gi or /[isp+]/gi;

 */

let result = text.match(regex);
console.log(result);