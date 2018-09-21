// https://www.hackerrank.com/challenges/30-abstract-classes/problem

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

// Complete the marsExploration function below.
function marsExploration(s) {
    let radiation = s;

    let total = 0;

    let j = 0;

    while (j < radiation.length) {
        if (radiation.indexOf('SOS') === 0) {
            radiation = radiation.slice(3);
            continue;
        }

        if (radiation[j] != 'S') {
            total++;
        }

        if (radiation[j + 1] != 'O') {
            total++;
        }

        if (radiation[j + 2] != 'S') {
            total++;
        }

        j += 3;
    }

    return total;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = marsExploration(s);

    ws.write(result + "\n");

    ws.end();
}
