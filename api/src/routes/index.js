const express = require("express");
const userRouter = require("./user.router.js");

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/user", userRouter);
};

module.exports = routerApi;
