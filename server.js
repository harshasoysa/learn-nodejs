const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url, req.method);
})

server.listen(3500, 'localhost', () =>{
    console.log('listning for requests on 3500')
})