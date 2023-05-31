const http = require('http');
const port = 300;

const server = http.createServer((req,res)=> {
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    res.ent('Hola Mundo'); 
});

server.listen(port, ()=> {
    console.log('Server running on port: ${port}')
});