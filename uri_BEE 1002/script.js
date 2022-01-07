// https://stackoverflow.com/questions/54034648/node-js-read-file-using-async-await
// Node.js read file using async/await
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var PI = 3.14159;
var raio = parseFloat(input);

// var area = PI *(raio * raio) ou
var area = PI * Math.pow(raio, 2);

console.log("A=" + area.toFixed(4));

