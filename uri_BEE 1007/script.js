var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

console.log(lines);

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseInt(lines.shift());
var D = parseInt(lines.shift());

console.log(D)

console.log((A * B))
console.log((C * D))
// DIFERENCA = (A * B) - (C * D);

// console.log("DIFERENCA = " + DIFERENCA);

