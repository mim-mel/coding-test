const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replaceAll(/\r/g, '')
  .split(/\n/g)
  .map(a => Number(a));

//input값 중 가장 큰 값의*2한 값을 max값으로 정해준다.
let max = Math.max(...input) * 2;

//소수를 판별하는 배열에 max값만큼 true, false로 값을 만든다.
let prime = Array(max + 1)
  .fill(true)
  .fill(false, 0, 2);

//소수를 판별하는 공식이다.
//소수가 아닐 경우에는 prime배열안의 값을 false로 변경시켜준다
for (let i = 2; i * i <= max; i++) {
  if (prime[i]) {
    for (let j = i * i; j <= max; j += i) {
      prime[j] = false;
    }
  }
}

//input에 있는 값들을 forEach로 순회한다.
input.forEach(num => {
  const start = num;
  const end = num * 2;

  //start+1에서부터 end사이의 값을 체크한다.
  //해당 값이 소수인 경우(prime안에서 해당 인덱스의 값이 true이면 소수이다) cnt를 더해준다.
  if (num > 0) {
    let cnt = 0;
    for (let i = start + 1; i <= end; i++) {
      if (prime[i] === true) {
        cnt++;
      }
    }
    console.log(cnt);
  }
});
