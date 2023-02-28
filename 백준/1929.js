const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(a => Number(a));


//에라토스테네스의 체
let array = Array(input[1] + 1)
  .fill(true)
  .fill(false, 0, 2);

for (let i = 2; i * i <= array.length; i++) {
  if (array[i]) {
    for (let j = i * i; j <= array.length; j += i) {
      array[j] = false;
    }
  }
}

//array배열의 해당 인덱스가 true인 경우에만 답으로 반남
for (let i = input[0]; i <= input[1]; i++) {
  if (array[i] === true) {
    console.log(i);
  }
}
