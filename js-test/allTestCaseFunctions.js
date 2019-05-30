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
    let result = null;
    let tempName = null;
    let tempFunc = null;
    console.log(functionToRun);
    if(functionToRun.includes('()')) {
        let st = "";
        for(let i = 0; i < functionToRun.length - 2; i++) {
            st += functionToRun[i];
        }

        tempName = st;
        tempFunc = functionToRun;
    }   else {
        // writing string () for func
    }
    try {
        result = eval(functionToRun);
        switch(true) {
            case inFnc === 'type':
                    typeMatcher(result);           
                break;
        }
    }   catch (err){
        result = err.stack;
    }
}

function typeMatcher(input) {

}