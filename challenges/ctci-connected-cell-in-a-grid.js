// https://www.hackerrank.com/challenges/ctci-connected-cell-in-a-grid/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the maxRegion function below.
function maxRegion(grid) {
    const counts = [];

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] == 1) {
                let total = processRegion(grid, r, c);

                counts.push(total);
            }
        }
    } 

    
    const total = Math.max.apply(null, counts);

    return total;
}

function processRegion(grid, r, c) {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) {
        return 0;
    }

    if (grid[r][c] != 1) {
        return 0;
    }

    let counts = [1];

    // visit this node
    grid[r][c] = 0;

    // visit all neighbors
    const neighbors = [
        [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]
    ];

    for (let next of neighbors) {
        let [y, x] = next;
        counts.push(processRegion(grid, r+y, c+x));
    }

    return counts.reduce((a,b) => a + b);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let grid = Array(n);

    for (let i = 0; i < n; i++) {
        grid[i] = readLine().split(' ').map(gridTemp => parseInt(gridTemp, 10));
    }

    const res = maxRegion(grid);

    ws.write(res + '\n');

    ws.end();
}
