// Type Matcher
// Error Checker
// Input Limit
// Input type Error
// Space Complexity
 

// "type"
// "error"
// "inputLimit"
// "inputTypeError"
// "spaceComplexity"


// "String"
// "Object">
// "Number">
// "Array">
// "Float">
// "UndefinedOrNull">

function main(functionToRun, inFnc) {
    
    let tempFunc = functionToRun;
    
    console.log(functionToRun);
   
    let returning = undefined;
    try {
        switch(true) {
            case inFnc === 'type':
                returning = typeMatcher(tempFunc);           
                break;
            
            case inFnc === 'error':
                returning = errorChecker(tempFunc);
                break;
            
            case inFnc === 'inputLimit':
                returning = inputLimitChecker(tempFunc);
                break;
            
            case inFnc === 'inputTypeError':
                returning = inputTypeError(tempFunc);
                break;
            
            case inFnc === 'spaceComplexity':
                returning = spaceComplexityCounter(tempFunc);
                break;
            
            case inFnc === 'timeComplexity':
                returning = timeComplexityCounter(tempFunc);
                break;
        }
        return returning;
    }   catch (err){

        result = err.stack;
    }
}

function timeComplexityCounter(tempFunc) {
// reading entire function line by line to count the O() notation.!
// 
}   

function spaceComplexityCounter(tempFunc) {

}

function inputTypeError(tempFunc) {

}

function inputLimitChecker(tempFunc) {

}

function typeMatcher(tempFunc) {

}

function errorChecker(tempFunc){
    let functionName = '';
    let functionValue = '';
    if(tempFunc.includes('()')) {
        functionValue = tempFunc;
        console.log(functionValue);
    }   else {
        functionValue = eval(tempFunc);   

    }
    return functionValue;
}

// now adding function with arguments to check directly.
// any function name with arguments like integers array objects callbacks etc..
// a drop down menu for selecting argument types and length.
// or a large text field to add name with all arguments as a one line.








//------------- basic logic for getting array to evaluate for time complexity..
// //        console.log(typeof functionValue);
// let f = functionValue;
// f = f.toString();
// console.log(f);
// let arr = f.split(" ");
// let b = arr.filter((ele) => {
//     if(ele !== '') {
//         return ele;
//     }
// });
// console.log(arr, b);