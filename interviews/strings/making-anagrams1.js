// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem

// adapted from C++ solution by cool_shark
// int number_needed(string a, string b) {
//     auto count = 0;
//     vector<int> freq(26, 0);
//     for (auto c : a) { ++freq[c - 'a']; }
//     for (auto c : b) { --freq[c - 'a']; }
//     for (auto val : freq) { count += abs(val); }
//     return count;
// }

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


// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let count = 0;
    let freq = new Array(26).fill(0);

    const inc = (c, i) => freq[c.charCodeAt(0) - 'a'.charCodeAt(0)] += i;

    for (let c of a) inc(c, 1);
    for (let c of b) inc(c, -1);
    for (let v of freq) count += Math.abs(v);
    
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}
