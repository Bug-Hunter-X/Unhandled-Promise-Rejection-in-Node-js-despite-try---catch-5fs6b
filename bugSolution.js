const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

async function fetchData(){
    try{
        const response = await fetch('invalid-url'); //Simulate an error
        const data = await response.json();
        console.log('Data fetched successfully:', data);
    }catch(error){
        console.error('Error fetching data:', error);
    }
}

//Proper way to handle the promise rejection
fetchData().catch(error => {
    console.error('Promise Rejection:',error);
})

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});