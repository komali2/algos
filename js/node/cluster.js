//clusters are how you can spawn child servers, basically, and spread out 
//server operations across however many processors you have 
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

console.log(numCPUs);

if(cluster.isMaster){
    //fork workers
    for(var i = 0; i < numCPUs; i++){
        cluster.fork();
    }

    cluster.on('exist', (worker, code, signal)=>{
        console.log(`worker ${worker.process.pid} died`);
    });
} else{
 //workers can share any tcp connection
 //in this case, an http server
 http.createServer((req, res)=>{
     res.writeHead(200);
     res.end('hello world\n');
 }).listen(8000);
}