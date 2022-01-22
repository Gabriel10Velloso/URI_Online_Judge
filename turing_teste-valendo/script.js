const input = require('fs').readFileSync('stdin', 'utf8');

var subsets = function (array) {
  var result = [];
  result.push([]);
  for (var i = 1; i < (1 << array.length); i++) {
    var subset = [];
    for (var j = 0; j < array.length; j++)
      if (i & (1 << j))
        subset.push(array[j]);
    result.push(subset);
  }
  return result;
}
const nums = input.split(" ").map(n => parseInt(n));
function printArray(arr) {
  console.log('sss', JSON.stringify(arr).replace(/,\s*/g, ''));
}
printArray(subsets(nums));


