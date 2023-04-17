const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const users = [
  {
    userUniqueId: "1",
    userName: "john",
    userEmail: "john@gmail.com",
    userAge: "23",
  },
  {
    userUniqueId: "2",
    userName: "paul",
    userEmail: "paul@gmail.com",
    userAge: "27",
  },
  {
    userUniqueId: "3",
    userName: "steve",
    userEmail: "steve@gmail.com",
    userAge: "25",
  },
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
  const inputUserUniqueId = req.body.userUniqueId;
  const inputUserName = req.body.userName;
  const inputUserEmail = req.body.userEmail;
  const inputUserAge = req.body.userAge;

  users.push({
    userUniqueId: inputUserUniqueId,
    userName: inputUserName,
    userEmail: inputUserEmail,
    userAge: inputUserAge,
  });

  res.render("home", {
    data: users,
  });
});

app.post("/delete", (req, res) => {
  var requestedUserInputUniqueId = req.body.userUniqueId;
  var j = 0;
  users.forEach((user) => {
    j = j + 1;
    if (user.userUniqueId === requestedUserInputUniqueId) {
      users.splice(j - 1, 1);
    }
  });

  res.render("home", {
    data: users,
  });
});

app.post("/update", (req, res) => {
  const inputUserUniqueId = req.body.userUniqueId;
  const inputUserName = req.body.userName;
  const inputUserEmail = req.body.userEmail;
  const inputUserAge = req.body.userAge;

  var j = 0;

  users.forEach((user) => {
    j = j + 1;
    if (user.userUniqueId == inputUserUniqueId) {
      user.userUniqueId = inputUserUniqueId;
      user.userName = inputUserEmail;
      user.userEmail = inputUserEmail;
      user.userAge = inputUserAge;
    }
  });

  res.render("home", {
    data: users,
  });
});

app.listen(3000, (req, res) => {
  console.log(`app is running on port number: 3000`);
});
