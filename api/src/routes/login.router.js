const express = require("express");

const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
  res.send("POST /login");
});

module.exports = loginRouter;
