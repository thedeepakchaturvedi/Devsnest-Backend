const express = require("express");
const app = express();

// CRUD -> POST, GET, PUT, DELETE

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/", (req, res) => {
  res.send("Hello POST");
});

app.put("/", (req, res) => {
  res.send("Hello PUT");
});

app.listen(5000);
