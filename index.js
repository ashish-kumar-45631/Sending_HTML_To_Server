// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const data = fs.readFileSync('index.html').toString();
    res.end(data);
});

server.listen(3000);
console.log("Server is listening on port 3000");

module.exports = server;
