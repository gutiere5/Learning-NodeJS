const http = require('node:http');

const server = http.createServer((req, res) => {
    res.end('Hello from server');
})

server.listen(5000, 'localhost', () => {
    console.log('Server was started')
})