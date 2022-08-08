const http = require('http'); 

const requestLinear = (request, response) => {
    response.setHeader('Content-Type', 'text/hmtl');

    response.statusCode = 200;
    response.end('Hello World');
}

const port = 5000;
const host = 'localhost';
 
const server = http.createServer(requestLinear);

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
// console.log("halooo")