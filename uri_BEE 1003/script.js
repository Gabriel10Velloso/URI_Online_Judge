// https://stackoverflow.com/questions/54034648/node-js-read-file-using-async-await
// Node.js read file using async/await
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

var soma = A + B;

console.log("SOMA = " + soma);
