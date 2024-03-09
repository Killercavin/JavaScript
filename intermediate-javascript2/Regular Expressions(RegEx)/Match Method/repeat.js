let myVar = 'Repeat, repeat, rePeaT, REPEAT';
let regex = /Repeat/gi;

let result = myVar.match(regex);

// check for the conndition

if (!result){
    console.log(Boolean(0));
}

else{
    console.log(true);
}

console.log(result);