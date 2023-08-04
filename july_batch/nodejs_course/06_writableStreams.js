var fs = require("fs");

var data = `
<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset="utf-8" />
        <title>Writable Streams!!</title>
    </head>

    <body>
        <h1>Writable Streams!!</h1>
        <p>This is a Sample Data</p>
    </body>
</html>
`;

var writerStream = fs.createWriteStream("sample.html");

writerStream.write(data, "utf-8");
writerStream.end();

writerStream.on("error", function (err) {
  console.log(err.stack);
});

console.log("writing the data completed!!");
