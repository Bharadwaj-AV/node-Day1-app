const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from CI/CD pipeline!\n');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://3.80.195.11:${port}/`);
});

