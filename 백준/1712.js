let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(a => Number(a));

let A = input[0];
let B = input[1];
let C = input[2];

//판매노트북 가격에서 노트북 원가를 빼 마진을 구한다.
let margin = C - B;

//고정비용을 마진으로 나눠서 마진으로 몇대를 팔아야 고정비용을 충당할 수 있는지 구한다.
//이때 손익분기점이 아닌 손익분기점을 넘는 수를 구해야 하기 때문에 +1을 더해준다.
let count = Math.floor(A / margin) + 1;

//만약 margin이 0또는 음수일 경우 -1을 리턴한다.
console.log(margin <= 0 ? -1 : count);
