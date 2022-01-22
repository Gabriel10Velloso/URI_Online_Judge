const input = require('fs').readFileSync('stdin', 'utf8');

var celPoints = function(ops) {
  var result = 0;
  let scores = [];
  for(let i = 0; i < ops.length; i++) {
    if(!isNaN(ops[i])){
      scores.push(parseInt(ops[i]));
    } else if(ops[i] == 'C') {
      const multiply = (scores[0] * scores[1]);
      scores.pop();
      scores.push(multiply)
    } else if (ops[i] == 'D') {
      const plus = scores[0] + scores[1];
      scores.push(plus);
    }
  }
  result = (scores[0]+scores[1])+scores[2];
  return result;
};

var ops = input.split(" ");

console.log(celPoints(ops));


