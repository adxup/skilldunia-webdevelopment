const fs = require("fs");

function nodeStyleCallBack(err, data) {
  try {
    console.log(data.toString("utf-8"));
  } catch (err) {
    console.log(err);
  }
}

fs.readFile("./sample.txt", nodeStyleCallBack);
