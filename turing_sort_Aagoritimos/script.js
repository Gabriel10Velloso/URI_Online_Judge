
const input = require('fs').readFileSync('stdin', 'utf8');

var solution = function (a) {

  let val = []
  for (let i = 0; i < a.length; i++) {
    val.push((a[i] ** 2))
  }
  return val.sort((a, b) => a - b);
}

function printArray(arr) {
  console.log('sss', arr);
  console.log('AAA', JSON.stringify(arr).replace(/,\s*/g, ''));

}

const a = input.split(" ").map(n => parseInt(n));
const output = solution(a)
printArray(output);




// const input = require('fs').readFileSync('stdin', 'utf8');
// // var lines = input.split('\n');

// let value = input.split(" ").map(item => parseInt(item));
// let maiorAB = '';
// let maiorXC = '';
// let maiorXD = '';

// for(let i = 0; i < value.length; i++) {
//   if(i === 2) {
//   maiorAB = (value[0] + value[1] + Math.abs(value[0] - value[1])) / 2;
//   maiorXC = (value[2] + maiorAB + Math.abs(value[2] - maiorAB)) / 2;
//   } else if (i === 3) {
//     maiorAB = (value[0] + value[1] + Math.abs(value[0] - value[1])) / 2;
//     maiorXC = (value[2] + maiorAB + Math.abs(value[2] - maiorAB)) / 2;
//     maiorXD = (value[3] + maiorAB + Math.abs(value[3] - maiorAB)) / 2;
//   }
// }

// console.log(maiorXD + " eh o maior");

