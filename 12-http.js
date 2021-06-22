const http = require('http');

//resquest -> incoming request from the client 
//response -> response that is sent from the server
const server = http.createServer((request,response)=>{
    if (request.url === '/') {
        response.end('Hello Welcome to our home page');
    }
    if (request.url === '/about') {
        response.end('This is our about page');
    }
    else {
        response.end(`
        <h1>Oops</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `);
    }
});

server.listen(5000);