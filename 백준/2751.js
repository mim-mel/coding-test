const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replaceAll(/\r/g, '')
  .split(/\n/g);

//마지막 배열 제거
input.shift();
//작은수부터 정렬
input.sort((a, b) => a - b);
console.log(input.join('\n'));
