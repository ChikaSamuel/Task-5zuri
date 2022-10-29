const path = require('path');
const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) =>{
    
        let filePath = path.join (__dirname, 'pfiles', request.url === '/' ? 'home.html': request.url)
        fs.readFile (filePath, 'utf8', (err, data) =>{
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        }) 

    if (request.url === '/about.html'){
        let filePath = path.join (__dirname, 'pfiles', 'about.html')
        fs.readFile (filePath, 'utf8', (err, data) =>{
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
    }
    if (request.url === '/contact.html'){
        let filePath = path.join (__dirname, 'pfiles', 'contact.html')
        fs.readFile (filePath, 'utf8', (err, data) =>{
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
    }
});
const port = 5000

server.listen(port, () => {
    console.log(`server is running on port ${port}`)
});