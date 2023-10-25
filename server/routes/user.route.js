const express = require("express");
const route = express.Router();

route.get("/getUser", (req, res) => {
  res.status(200).send({ name: "abc" });
});

route.post("/addUser", (req, res) => {
  res.status(200).send({ name: req?.name ?? "test" });
});

module.exports = route;
