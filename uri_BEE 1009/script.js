var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// console.log(lines);

var name = parseInt(lines.shift());
var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var total = ((B * 0.15)+ A).toFixed(2);

console.log("TOTAL = R$ " + total);

