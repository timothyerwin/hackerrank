// https://www.hackerrank.com/challenges/30-conditional-statements/problem

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



function main() {
    const N = parseInt(readLine(), 10);
    
    const isOdd = n => n % 2;
    
    const calculate = x => {
        if(isOdd(x)) {
            return 'Weird';
        } else {
            if(x >= 2 && x <= 5) {
               return 'Not Weird';
            } else if(x >= 6 && x <= 20) {
                return 'Weird';
            } else if(x > 20) {
                return 'Not Weird';
            }
        }
    }
    
    console.log(calculate(N));
}
