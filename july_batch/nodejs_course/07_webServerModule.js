var http = require("http");
var fs = require("fs");
var url = require("url");

http
  .createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write(err);
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data.toString());
      }
    });
  })
  .listen(8081);

console.log(`server running at: http://localhost:8081/sample.html`);
