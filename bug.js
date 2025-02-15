const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Unhandled promise rejection error
//The above code is working fine but when i added a new async function in the same file that will call a external api then it gives me unhandled promise rejection error although i used try catch block to handle error