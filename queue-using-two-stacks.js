class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }    
    
    push(value) {
        this.stack1.push(value);
    }
    
    peek() {
        this.shift();
        
        return this.stack2[this.stack2.length-1];
    }
    
    shift() {
        if(this.stack2.length === 0) {
            while(this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
    }
    
    pop() {
       this.shift();
        
       return this.stack2.pop();
    }
}

function processData(input) {
   const queue = new Queue();
    
    const commands = input.split('\n');
    
    commands.forEach(command => {
       const [t, v] = command.split(' ');

        if(t == 1) {
            queue.push(v);
        } else if( t == 2 ) {
            queue.pop();
        } else if( t == 3) {
            console.log(queue.peek());
        }
    });
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
