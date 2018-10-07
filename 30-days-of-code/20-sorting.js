// https://www.hackerrank.com/challenges/30-sorting/problem

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function bubbleSort(array) {
  let totalSwaps = 0;

  for (let a = 0; a < array.length; a++) {
    let swaps = 0;

    for (let b = 0; b < array.length - 1; b++) {
      if (array[b] > array[b + 1]) {
        const temp = array[b];

        array[b] = array[b + 1];
        array[b + 1] = temp;

        swaps += 1;
      }
    }

    totalSwaps += swaps;

    if (swaps === 0) {
      break;
    }
  }

  return {
    swaps: totalSwaps,
    array
  }
}

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here

  const result = bubbleSort(a);

  console.log(`Array is sorted in ${result.swaps} swaps.`);
  console.log(`First Element: ${result.array.shift()}`);
  console.log(`Last Element: ${result.array.pop()}`);
}

