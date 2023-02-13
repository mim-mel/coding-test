//윈도우
const { log } = require('console');
const fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim();

//맥
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

//백준제출
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
