// console.log("Kya bolti company,");
const http=require('http')
const data=require('./data')
// In createServer method we pass funtion as parameter

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(4300);