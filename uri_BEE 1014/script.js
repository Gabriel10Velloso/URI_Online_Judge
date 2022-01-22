const input = require('fs').readFileSync('stdin', 'utf8');

const [distanciaPercorrida, conbustivelGasto] = input.split('\n');

const consumoMedio = (distanciaPercorrida / conbustivelGasto).toFixed(3);

const a = parseFloat(consumoMedio);
console.log(a + " Km/l");


