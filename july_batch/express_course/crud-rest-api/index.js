// import the required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create an instance of express
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

// create sample json data
let items = [
  { id: 1, name: "item 1" },
  { id: 2, name: "item 2" },
  { id: 3, name: "item 3" },
];

// crud operations
// read all items
app.get("/items", (req, res) => {
  res.json(items);
});

// read a single item by id
app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id === id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "item not found" });
  }
});

// create a new item
app.post("/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// update the existing item
app.post("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updateItem = req.body;
  const index = items.find((item) => item.id === id);

  if (index !== -1) {
    items[index] = { ...items[index], ...updateItem };
    res.json(items[index]);
  } else {
    res
      .status(404)
      .json({ message: "update didn't work, because item not found" });
  }
});

// delete the existing item
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter((item) => item.id !== id);
  res.json({ message: "item deleted successfully" });
});

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server started at PORT: " + PORT);
});
