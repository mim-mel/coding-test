let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const climb = input[0]; // 아침에 이동하는 수
const slipped = input[1]; // 밤에 미끄러지는 수
const height = input[2]; // 높이

// (높이 - 밤에 미끄러지는 수) / (아침에 이동하는 수 - 밤에 미끄러지는 수)
console.log(Math.ceil((height - slipped) / (climb - slipped)));
