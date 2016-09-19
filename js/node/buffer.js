//buffer is a class that is used to deal with streams. 
//used to be necessary b/c es6 didn't exist with it's typedarray
//Buffers are kind of like how C does arrays

//check this out: allocatting data without clearing, just like C malloc
const buf1 = Buffer.allocUnsafe(10);
//would have to clear this with fill() or write()
console.log(buf1);

//can also from it to create a buffer filled with, whatever
const buf2 = Buffer.from('Hello?');
console.log(buf2);
//those values are the ASCII bytes (looks like in hex) to refer to those letters
//woah, weirdly, second time round that malloc is a bunch of cleared memory, neat

//you can take those buffers and toString them, and pass in encoding

console.log(buf1.toString(), buf2.toString());
console.log(buf1.toString('ascii'), buf2.toString('ascii'));
console.log(buf1.toString('utf8'), buf2.toString('utf8'));
console.log(buf1.toString('hex'), buf2.toString('hex'));
