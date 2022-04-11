const express = require("express");
const app = express();
const mockData = require("../data");

app.get("/", (req, res) => {
  res.status(200).send(mockData);
});

module.exports = app;