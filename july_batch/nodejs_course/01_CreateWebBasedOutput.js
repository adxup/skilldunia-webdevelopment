var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello NodeJS!");
  })
  .listen(8081);

console.log("server started at http://localhost:8081");
