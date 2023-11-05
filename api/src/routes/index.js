const express = require("express");
const userRouter = require("./user.router.js");
const authRouter = require("./auth.router.js");
const realEstateRouter = require("./real_estate.router.js");
const tenantRouter = require("./tenant.router.js");
const ownerRouter = require("./owner.router.js");
const propertyRouter = require("./property.router.js");

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/login", authRouter);
  router.use("/user", userRouter);
  router.use("/inmobiliaria", realEstateRouter);
  router.use("/arrandatario", tenantRouter);
  router.use("/arrendador", ownerRouter);
  router.use("/propiedad", propertyRouter);
};

module.exports = routerApi;
