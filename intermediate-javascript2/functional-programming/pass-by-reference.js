let a = {language: "Javascript"}
let b = a

console.log(a) // => {language: "Javascript"}
console.log(b) // {language: "Javascript"}

a.language = "Ruby"

console.log(a) // => {language: "Ruby"}
console.log(b) // => {language: "Ruby"}