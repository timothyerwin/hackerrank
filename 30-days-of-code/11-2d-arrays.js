// https://www.hackerrank.com/challenges/30-2d-arrays/problem

'use strict';

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

const flatten = list => list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);

function getHourGlass(arr, r, c) {
    let rows = [];

    for (let row = r; row < r + 3; row++) {
        let cells = [];
        for (let col = c; col < c + 3; col++) {
            cells.push(arr[row][col]);
        }

        rows.push(cells);
    }

    rows[1][0] = 0;
    rows[1][2] = 0;

    return rows;
}

function main() {
    const totals = [];

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            let hourglass = getHourGlass(arr, r, c);

            let total = flatten(hourglass).reduce((a, b) => a + b);

            totals.push(total);
        }
    }

    console.log(Math.max(...totals));
}
