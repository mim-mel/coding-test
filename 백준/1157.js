const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();

//1. a-z까지의 배열을 생성해준다.
const array = new Array(26).fill(0);

//2. 알파벳들을 charCodeAt()을 사용하여 숫자로 변환하고 a(65)만큼을 뺀 그 숫자를 배열의 인덱스로 잡은 후 1을 추가해준다.
// ex) 알파벳이 a라면 65-65=0 이므로 인덱스0에 1을 추가해준다.
for (let i = 0; i < input.length; i++) {
  array[input.charCodeAt(i) - 65]++;
}

//3.배열 중에서 max값을 구한다.
const max = Math.max(...array);

//4. max값의 인덱스를 indexOf(max)로 찾아준다.
const index = array.indexOf(max);

//5. max와 index가 다른 알파벳일 경우 true로 변환시켜서 '?'를 출력해준다
let isSame = false;

for (let j = 0; j < 26; j++) {
  if (array[j] === max && index != j) {
    isSame = true;
    break;
  }
}
console.log(isSame ? '?' : String.fromCharCode(index + 65));
