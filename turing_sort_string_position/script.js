
const input = require('fs').readFileSync('stdin', 'utf8');

var solution = function (a) {

  let val = []
  let val1 = []
  let val2 = []
  for (let i = 0; i < a.length; i++) {
    if(a.indexOf("ddd")) {
       val = [a.indexOf("ddd"), a.indexOf("ddd")+2]
      console.log("Found");
    }
     if (a.indexOf("eeee")) {
       val1 = [a.indexOf("eeee"), a.indexOf("eeee")+3]
    } 
     if (a.indexOf("bbb")) {
       val2 = [a.indexOf("bbb"), a.indexOf("bbb")+2]
    }
  }
  console.log(val, val1, val2)
}

function printArray(arr) {
  console.log('sss', arr);
  // console.log('AAA', JSON.stringify(arr).replace(/,\s*/g, ''));

}

const a = input;
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

