// https://www.hackerrank.com/challenges/30-dictionaries-and-maps

function processData(input) {
    const phonebook = {};

    const data = input.split('\n');

    const length = data.shift();

    for (let i = 0; i < length; i++) {
        const [name, number] = data[i].split(' ');

        phonebook[name] = number;
    }

    for (let j = length; j < data.length; j++) {
        const name = data[j];

        if (phonebook[name]) {
            console.log(`${name}=${phonebook[name]}`);
        } else {
            console.log('Not found')
        }
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
