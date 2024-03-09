let myMessage = "Happing 'Birthday to you' ";
let myRegex = /birthday/i;
let result = myMessage.match(myRegex);

// Conditional statement to check the boolean value of the result

if (!result){
    console.log(Boolean(0));
}

else{
    console.log(Boolean(1));
}