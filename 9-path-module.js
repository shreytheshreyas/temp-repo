const path = require('path');

//path seperater used by your system
console.log(path.sep);

const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);
//prints the base name which in this case is test.txt
console.log(path.basename(filePath));

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);