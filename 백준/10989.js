const fs = require('fs');
const input = fs.readFileSync(filePath).toString().trim().split('\r\n');
//맨 앞자리 수 제거
input.shift();
//작은 숫자 부터 재정렬
console.log(input.sort((a, b) => a - b));
