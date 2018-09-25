// https://www.hackerrank.com/challenges/30-queues-stacks/problem

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
function Solution(){
  this.stack = [];
  this.queue = [];
}

Solution.prototype.pushCharacter = function(ch) {
  this.stack.push(ch);
}

Solution.prototype.enqueueCharacter = function (ch) {
  this.queue.push(ch);
}

Solution.prototype.popCharacter = function (ch) {
  return this.stack.pop();
}

Solution.prototype.dequeueCharacter = function (ch) {
  return this.queue.shift();
}

function main(){
