let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(a => Number(a));

let A = input[0];
let B = input[1];
let C = input[2];

let margin = C - B;
let count = Math.floor(A / margin) + 1;

console.log(margin <= 0 ? -1 : count);
