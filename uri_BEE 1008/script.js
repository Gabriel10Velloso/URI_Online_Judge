var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// console.log(lines);

var number = parseInt(lines.shift());
var A = parseInt(lines.shift());
var B = parseFloat(lines.shift());
var salary = (A * B).toFixed(2);

console.log("NUMBER = " + number);
console.log("SALARY = U$ " + salary);

