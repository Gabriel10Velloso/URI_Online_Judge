
const input = require('fs').readFileSync('stdin', 'utf8');

var twoSumLessThanK = function (a, k) {
  let max = -1;

  console.log(k)
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      const sum = a[i] + a[j];
      if (sum < k && sum > max) {
        max = sum
      }
    }
  }
  return max
}

function printArray(arr) {
  console.log('sss', arr);
  // console.log('AAA', JSON.stringify(arr).replace(/,\s*/g, ''));

}

const a = input.split(" ").map(n => parseInt(n));
const k = 60
const output = twoSumLessThanK(a, k)
printArray(output);




