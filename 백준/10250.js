const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replaceAll(/\r/g, '')
  .split(/\n/g);

//나와야 하는 답의 갯수
const A = parseInt(input.shift());

for (let i = 0; i < A; i++) {
  // [ '6 12 10', '30 50 72' ]을 ''을 기준으로 나누어 [ '6', '12', '10' ]로 변경시킴
  const HWM = input[i].split(' ');
  //높이
  let H = parseInt(HWM.shift());
  //넓이
  let W = parseInt(HWM.shift());
  //n번째 사람
  let N = parseInt(HWM.shift());

  //방 넘버를 표시
  let roomNumber = 1;

  //높이 6이 n번째 사람의 수 10보다 작은경우 1번만 실행됨
  while (H < N) {
    //방 넘버가 2로 변함
    roomNumber++;
    //10-6이 되어서 4가 됨
    N = N - H;
  }
  if (roomNumber < 10) {
    //방 넘버가 10보다 작은경우 가운데 0이 들어감
    console.log(`${N}0${roomNumber}`);
  } else {
    console.log(`${N}${roomNumber}`);
  }
}
