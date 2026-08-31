const http = require('node:http');
const { findAvailablePort } = require('./10-free-port.js');

const desiredPort = process.env.PORT || 3000; // Utilizo el puerto del entorno o el 3000 por defecto

const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
})

findAvailablePort(desiredPort).then(port => {
    // console.log(`Available port: ${port}`);
    server.listen(port, () => {
        console.log(`Server running on port http://localhost:${port}`);
    });
});