//Modules

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-syntax');

for (const name in names) {
    sayHi(name);
}

console.log(data);

//the function called in mind grenade will be executed
require('./7-mind-grenade');