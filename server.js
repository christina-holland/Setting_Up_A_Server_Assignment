//Importing the http module from node.js
const http = require('http');

//Creating an http server and defining a response for all calls
const server = http.createServer((req, res) => {

//Root route (/)
  if (req.url === '/') {
    res.statusCode = 200; //Sets http status code to ok
    //Sets the content-type header to text/html
    res.setHeader ('Content-Type', 'text/html');
    //Sends a response greeting and closes the connection
    res.end('Hello, this is the root route');
  }

//Api route
  else if (req.url === '/api') {
    const responseData = {
      greeting: 'Hello, this is the API route'
    };
    res.statusCode = 200; //Sets http status code to ok
    //Sets the content-type header to application/json
    res.setHeader ('Content-Type', 'application/json');
    //Sends a response greeting and closes the connection
    res.end(JSON.stringify(responseData));
  }

//Handle ther routes with a 404 Not Found error
  else {
    res.statusCode = 404;
    res.setHeader ('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

//Configuring server to listen on port 3000
const PORT = 3000;
//Starts the server and listens on the specified port
server.listen(PORT, () => {
    //Logs a message when the server starts successfully
    console.log(`Server running at http://localhost:${PORT}/`);
});
