const express = require("express");
const tenantRouter = express.Router();
const TenantService = require("../services/tenant.service.js");
const tenantService = new TenantService();
const validatorHandler = require("../middlewares/validator.handler.js");

const {
  getArrendatarioSchema,
  createArrendatarioSchema,
  updateArrendatarioSchema,
} = require("../middlewares/validationSchemas/arrendatario.schema.js");

tenantRouter.get("/", async (req, res, next) => {
  try {
    const arrendatarios = await tenantService.getTenant();
    res.status(200).json(arrendatarios);
  } catch (err) {
    next(err);
  }
});

tenantRouter.post(
  "/",
  validatorHandler(createArrendatarioSchema, "body"),
  async (req, res, next) => {
    try {
      const newArrendatario = await tenantService.createTenant(req.body);
      res.status(200).json(newArrendatario);
    } catch (err) {
      next(err);
    }
  }
);

tenantRouter.get(
  "/:id",
  validatorHandler(getArrendatarioSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const arrendatario = await tenantService.getTenantById(id);
      res.status(200).json(arrendatario);
    } catch (err) {
      next(err);
    }
  }
);

tenantRouter.put(
  "/:id",
  validatorHandler(getArrendatarioSchema, "params"),
  validatorHandler(updateArrendatarioSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const arrendatario = await tenantService.updateTenant(id, req.body);
      res.status(200).json(arrendatario);
    } catch (err) {
      next(err);
    }
  }
);

tenantRouter.delete(
  "/:id",
  validatorHandler(getArrendatarioSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await tenantService.deleteTenant(id);
      res.status(200).json({ message: "Arrendatario deleted" });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = tenantRouter;
