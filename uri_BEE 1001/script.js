// https://stackoverflow.com/questions/54034648/node-js-read-file-using-async-await
// Node.js read file using async/await
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var x = (a+b);

console.log('X = ' + x);