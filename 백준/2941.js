const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let str = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

function solution(input) {
  for (let alphabet of str) {
    input = input.split(alphabet).join('a');
  }
  return input.length;
}

// 풀이과정

// 1. str안에 크로아티아 알파벳들을 모두 넣는다.
// 2. for 문을 돌려 input안에서 크로아티아 알파벳을 자른 후 그 자리를 a로 대체한다.
// 3. input의 length를 리턴한다

console.log(solution(input));
