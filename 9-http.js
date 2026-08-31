const http = require('node:http');
const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});
server.listen(3000, () => {
    console.log(`Server running on port http://localhost:${server.address().port}`);
});