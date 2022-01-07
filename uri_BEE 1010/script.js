var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

console.log(lines);

var item1 = lines.shift().split(' ');
var item2 = lines.shift().split(' ');
var paca1 = parseFloat((item1[1] * item1[2]));
var paca2 = parseFloat((item2[1] * item2[2]));
var total = (paca1 + paca2).toFixed(2);


console.log("VALOR A PAGAR: R$ " + total);

