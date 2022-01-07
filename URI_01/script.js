// https://stackoverflow.com/questions/54034648/node-js-read-file-using-async-await
// Node.js read file using async/await
var input = require('fs').readFileSync('stdin', 'utf8');

var [x, y, z] = input.split(" ").map(item => {
  // console.log(typeof parseInt(item));
  return parseInt(item);
});

console.log(x+y+z);
