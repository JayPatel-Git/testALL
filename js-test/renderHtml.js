
function run() {
    let inFnc = document.querySelector('#name').value;
        let result = null;
        if(inFnc === 'empty') {
            alert('Please select function.');
        }   else {
            let functionToRun = document.querySelector('.function-to-run').value;
            console.log(typeof functionToRun);
            if(functionToRun === '') {
                alert('Please enter function name to run.');
            }  else {
                // if(!functionToRun.includes('()')) {
                     
                // }
                try {
                    result = eval(functionToRun);
                }   catch (err){
                    console.log(err.stack);
                    result = err.stack;
                }
                    let display = document.querySelector('.result');
                    display.textContent = result;
                    display.style.color = 'green'; 
            }
            //if(functionToRun)
        }
}


document.addEventListener('DOMContentLoaded', function(main) {
    let runTest = document.querySelector('.run');
    runTest.addEventListener('click', function(click) {
        run();   
    });
    let hoverover = document.querySelector('#name');
    hoverover.addEventListener('mouseover', function(e) {
        if(e.target.classList.contains('typeMenu')) {
            e.target.classList.remove('hidden');
        }
    });

});



// TypeError.prototype.message
//     Error message. Although ECMA-262 specifies that TypeError should provide its own message property, in SpiderMonkey, it inherits Error.prototype.message.
// TypeError.prototype.name
//     Error name. Inherited from Error.
// TypeError.prototype.fileName
//     Path to file that raised this error. Inherited from Error.
// TypeError.prototype.lineNumber
//     Line number in file that raised this error. Inherited from Error.
// TypeError.prototype.columnNumber
//     Column number in line that raised this error. Inherited from Error.
// TypeError.prototype.stack
//     Stack trace. Inherited from Error.