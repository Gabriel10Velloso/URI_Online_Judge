const input = require('fs').readFileSync('stdin', 'utf8');

const [distanciaPercorrida, conbustivelGasto] = input.split('\n');

const consumoMedio = distanciaPercorrida / conbustivelGasto;

console.log(consumoMedio.toFixed(3) + " Km/l");


