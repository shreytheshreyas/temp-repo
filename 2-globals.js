//GLOBALS - NO WINDOW 

//OG javascript global vars and methods
// console
// set time out method
//set interval method

//Exclusive to node js
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - information about the current module (file)
// process - information about env where the program is being executed

console.log(`Making use of the __dirname global variable: ${__dirname}`);
console.log(`Making use of the __filename global variable: ${__filename}`);

setInterval(() => {
    console.log('hello world');
}, 1000);