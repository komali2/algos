const dns = require('dns');
console.time('dns resolve');
dns.resolve('google.com', (err, address)=>{
    address.forEach((el)=>{
        console.log(el);
    });
    console.timeEnd('dns resolve');
});
