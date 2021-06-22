//Asynchronous read and write
const {readFile,writeFile} = require('fs');

console.log('start');
readFile('./content/first.txt','utf8',(reject,resolve)=>{
    if (reject) {
        //prints required error
        console.log(reject);
        return;
    }

    const first = resolve;
    readFile('./content/second.txt','utf8',(reject,resolve)=>{
        if (reject) {
            console.log(reject);
            return;
        }
        const second = resolve;
        
        //if you use the flag property it will append the text
        writeFile('./content/result-async.txt',
        `Here is the result: ${first}, ${second}`,
        (reject,resolve)=>{
            if (reject) {
                console.log(reject);
                return;
            }
            console.log('done with this task');
        });
    });
});
console.log('starting next task');