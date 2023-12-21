let number = window.prompt("Enter a number", 0);
if (number < 0){
    console.log(`${number} is negative`);
}

else if (number == 0){
    console.log(`${number} is zero`);
}

else{
    console.log(`${number} is positive`);
}