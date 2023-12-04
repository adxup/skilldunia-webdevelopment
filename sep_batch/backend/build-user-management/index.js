const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const users = [
  { userId: 1, userName: "john", userEmail: "john@gmail.com" },
  { userId: 2, userName: "paul", userEmail: "paul@gmail.com" },
  { userId: 3, userName: "adam", userEmail: "adam@gmail.com" },
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", {
    data: users,
  });
});

app.listen(3000, (req, res) => {
  console.log("app is running at port no 3000");
});
