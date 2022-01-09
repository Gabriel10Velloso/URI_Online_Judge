const input = require('fs').readFileSync('stdin', 'utf8');
// var lines = input.split('\n');

let value = input.split(" ").map(item => parseInt(item));
let maiorAB = '';
let maiorXC = '';
let maiorXD = '';

for(let i = 0; i < value.length; i++) {
  if(i === 2) {
  maiorAB = (value[0] + value[1] + Math.abs(value[0] - value[1])) / 2;
  maiorXC = (value[2] + maiorAB + Math.abs(value[2] - maiorAB)) / 2;
  } else if (i === 3) {
    maiorAB = (value[0] + value[1] + Math.abs(value[0] - value[1])) / 2;
    maiorXC = (value[2] + maiorAB + Math.abs(value[2] - maiorAB)) / 2;
    maiorXD = (value[3] + maiorAB + Math.abs(value[3] - maiorAB)) / 2;
  }
}

console.log(maiorXD + " eh o maior");
