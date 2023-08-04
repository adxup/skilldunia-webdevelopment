var fs = require("fs");
var data = "";

var readerStream = fs.createReadStream("sample.txt");
readerStream.setEncoding("utf-8");

readerStream.on("data", function (chunck) {
  data += chunck;
});

readerStream.on("end", function () {
  console.log(data);
});

readerStream.on("error", function (err) {
  console.log(err.stack);
});

console.log("reader completion!!");
