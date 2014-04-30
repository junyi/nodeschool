var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2])

var bufferString = buffer.toString();

var splitted = bufferString.split('\n');

console.log(splitted.length - 1);