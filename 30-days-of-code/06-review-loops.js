// https://www.hackerrank.com/challenges/30-review-loop/problem

function processData(input) {
    const data = input.split('\n');
    
    data.splice(0, 1);

    for (let i = 0; i < data.length; i++) {
        const word = data[i];

        let even = [], odd = [];

        for (let c = 0; c < word.length; c++) {
            if (c === 0 || c % 2 === 0) {
                even.push(word[c]);
            } else {
                odd.push(word[c]);
            }
        }

        console.log(`${even.join('')} ${odd.join('')}`);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
