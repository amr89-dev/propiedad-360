const express = require("express");
const userRouter = require("./user.router.js");
const loginRouter = require("./login.router.js");
const realEstateRouter = require("./real_estate.router.js");
const arrendatarioRouter = require("./tenant.router.js");

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/login", loginRouter);
  router.use("/user", userRouter);
  router.use("/inmobiliaria", realEstateRouter);
  router.use("/arrandatario", arrendatarioRouter);
};

module.exports = routerApi;
