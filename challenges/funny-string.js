// https://www.hackerrank.com/challenges/funny-string/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the funnyString function below.
function funnyString(s) {
  let codes = [];

  for (let i in s) {
    codes.push(s.charCodeAt(i))
  }

  let reverse = codes.slice().reverse();

  let sr = []; let rr = [];

  for (let i = 0; i < codes.length-1; i++) {
    sr.push(Math.abs(codes[i] - codes[i + 1]));
    rr.push(Math.abs(reverse[i] - reverse[i + 1]));
  }

  if (sr.join('') === rr.join('')) {
    return 'Funny';
  } else {
    return 'Not Funny'
  }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = funnyString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
