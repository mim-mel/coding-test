const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

input = Number(input);

//Math.pow는 input의 2의 제곱과 같다
console.log(Math.pow(input, 2));

//for문이 2개 이고 1에서 n까지 범위만큼 실행된다.
//따라서 다항식으로 나타낸다면 n^2이다.
//Big-O표기법으로 나타내면 O(N^2)이며, 2차 시간이라고도 한다.
console.log(2);
