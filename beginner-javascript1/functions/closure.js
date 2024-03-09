const outerFunc = (outerVar) => {
    function innerFunc(innerVar){
        return outerVar + innerVar;
    };
    return innerFunc;
    }

const newFunc = outerFunc(5);
console.log(newFunc(95));