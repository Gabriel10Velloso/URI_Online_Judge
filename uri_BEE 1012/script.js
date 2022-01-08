var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var val = lines.shift().split(' ');
var A = parseFloat(val[0]);
var B = parseFloat(val[1]);
var C = parseFloat(val[2]);
var PI = 3.14159;

var TRIANGULO = ((A * C) / 2);
var CIRCULO = (PI * Math.pow(C, 2));
var TRAPEZIO = ((A+B)*C)/2;
var QUADRADO = Math.pow(B, 2);
var RETANGULO =(A*B);

console.log("TRIANGULO:", parseFloat(TRIANGULO).toFixed(3));
console.log("CIRCULO:", parseFloat(CIRCULO).toFixed(3));
console.log("TRAPEZIO:", parseFloat(TRAPEZIO).toFixed(3));
console.log("QUADRADO:", parseFloat(QUADRADO).toFixed(3));
console.log("RETANGULO:", parseFloat(RETANGULO).toFixed(3));
