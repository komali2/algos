const fs = require('fs');
const Console = console.Console;

//turns out console can be more than just a way to put text in the terminal
//you can make a custom console that for example logs out to a file

// const output = fs.createWriteStream('./testlog.txt');

// const logger = new Console(output);

// var count = 5;
// logger.log('count: %d', count);


//////// 
//did you know about console timers? i didn't

console.time('test');

for(var i = 0; i < 1000; i++){
    ;
} 

console.timeEnd('test');
//test: 1.246ms

//you can also stacktrace, this is turning into a full blown debug
// console.trace('to right here');