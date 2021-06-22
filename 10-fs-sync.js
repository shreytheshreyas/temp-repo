const {readFileSync,writeFileSync} = require('fs');
console.log('start');
//read file contents from the two respective files
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second);

//writes desired content into result-sync.txt
//if the flag property is passed there the required text is appended
writeFileSync('./content/result-sync.txt',
`Here is the result: ${first}, ${second}`,
{flag: 'a'}
);
console.log('done with this task');
console.log('starting the next one');
