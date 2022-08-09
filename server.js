const http = require('http'); 

const requestLinear = (request, response) => {
    response.setHeader('Content-Type', 'text/hmtl');
    response.statusCode = 200;
    
    const { method, url } = request;

    if ( url === '/' ) {
        if ( method === 'GET' ) {
            response.end('<h1>This is home page</h1>');
        } else {
            response.end(`<h1>The home page is not found, maybe the method ${method} is not correct for this request</h1>`);
        }
    } else if ( url === '/about' ) {
        if ( method === 'GET' ) {
            response.end('<h1>This is about page</h1>');

        } else if ( method === 'POST' )    {
                
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.end(`<h1>Hai ${name}, this is a about page but in post Method!</h1>`);
            });

        } else {
            response.end(`<h1>The home page is not found, maybe the method ${method} is not correct for this request</h1>`);
        }
    } else {
        response.end('<h1>Page Note Found</h1>');
    }
};

const port = 5000;
const host = 'localhost';
 
const server = http.createServer(requestLinear);

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});  



    // if ( method === 'GET' ) {
    //     response.write('<h1>Hello World Get</h1>');

    // } else if ( method === 'POST' ) {
        
    //     let body = [];

    //     request.on('data', (chunk) => {
    //         body.push(chunk);
    //     });

    //     request.on('end', () => {
    //         body = Buffer.concat(body).toString();
    //         const { name } = JSON.parse(body);
    //         response.end((`<h1>Hai, ${name}!</h1>`));
    //     })

    // } else if ( method === 'PUT' ) {
    //     response.write('<h1>Hello World Put</h1>');

    // } else {
    //     response.write('<h1>Hello User, do you know the fucking endpoint???</h1>');
    // }