// working version based off https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/
// https://www.hackerrank.com/challenges/minimum-swaps-2/problem

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

// Complete the minimumSwaps function below.
function minimumSwaps(array) {
    let answer = 0;
    
    let dictionary = [];
    
    let visited = new Array(array.length).fill(false);
    
    for(let i = 0; i < array.length; i++) {
       dictionary.push([array[i], i]);
    }
    
    // Sort the array based on the second element
    dictionary.sort((first, second) => first[0] - second[0]);
    
    for(let k = 0; k < array.length; k++) {
        if(visited[k] || dictionary[k][1] == k)
            continue;
        
        let cycles = 0;
        
        let j = k;
        
        while(!visited[j]) {
            visited[j] = true;
            
            j = dictionary[j][1];
            
            cycles += 1;
        }
        
        console.log(answer, cycles);
        
        answer += (cycles -1);
        
    }

    return answer;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
