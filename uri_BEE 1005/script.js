var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// console.log(lines);

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var media = (A * 3.5 + B * 7.5) / 11.0;

console.log("MEDIA = " + media.toFixed(5));
console.log("MEDIA = " + Math.round(media * 100000) / 100000);
console.log("MEDIA = " + Math.ceil(media * 100000) / 100000);
