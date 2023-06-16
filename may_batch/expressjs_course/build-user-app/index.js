const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const users = [
  { userId: 244, userName: "james", userEmail: "james@gmail.com", userAge: 23 },
  { userId: 653, userName: "john", userEmail: "john@gmail.com", userAge: 54 },
  { userId: 285, userName: "paul", userEmail: "paul@gmail.com", userAge: 87 },
  { userId: 263, userName: "adam", userEmail: "adam@gmail.com", userAge: 45 },
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", {
    data: users,
  });
});

app.post("/", (req, res) => {
  const userId = req.body.userId;
  const userName = req.body.userName;
  const userEmail = req.body.userEmail;
  const userAge = req.body.userAge;

  users.push({
    userId: userId,
    userName: userName,
    userEmail: userEmail,
    userAge: userAge,
  });

  res.render("home", {
    data: users,
  });
});

app.post("/delete", (req, res) => {
  var reqUserId = req.body.userId;
  var j = 0;
  users.forEach((user) => {
    j = j + 1;
    if (user.userId === reqUserId) {
      users.splice(j - 1, 1);
    }
  });

  res.render("home", {
    data: users,
  });
});

app.post("/update", (req, res) => {
  const userId = req.body.userId;
  const userName = req.body.userName;
  const userEmail = req.body.userEmail;
  const userAge = req.body.userAge;

  var j = 0;

  users.forEach((user) => {
    j = j + 1;
    if (user.userId === userId) {
      user.userId = userId;
      user.userName = userName;
      user.userEmail = userEmail;
      user.userAge = userAge;
    }
  });

  res.render("home", {
    data: users,
  });
});

app.listen(3000, (req, res) => {
  console.log(`app is running on port no: 3000`);
});
