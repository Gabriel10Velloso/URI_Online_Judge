var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var PI = 3.14159;
var entrada = parseInt(lines);
var volume = (4/3) * (PI * Math.pow(entrada, 3)); 
var result = parseFloat(volume).toFixed(3);

console.log("VOLUME = " + result);

