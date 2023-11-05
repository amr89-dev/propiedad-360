const express = require("express");
const ownerRouter = express.Router();
const OwnerService = require("../services/owner.service.js");
const ownerService = new OwnerService();
const validatorHandler = require("../middlewares/validator.handler.js");
const {
  createOwnerSchema,
  updateOwnerSchema,
  getOwnerSchema,
} = require("../middlewares/validationSchemas/arrendador.schema.js");

ownerRouter.get("/", async (req, res, next) => {
  try {
    const owners = await ownerService.getOwner();
    res.status(200).json(owners);
  } catch (error) {
    next(error);
  }
});

ownerRouter.get(
  "/:id",
  validatorHandler(getOwnerSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const owner = await ownerService.getOwnerById(id);
      res.status(200).json(owner);
    } catch (error) {
      next(error);
    }
  }
);

ownerRouter.post(
  "/",
  validatorHandler(createOwnerSchema, "body"),
  async (req, res, next) => {
    try {
      const owner = req.body;
      const newOwner = await ownerService.createOwner(owner);
      res.status(201).json(newOwner);
    } catch (error) {
      next(error);
    }
  }
);

ownerRouter.put(
  "/:id",
  validatorHandler(getOwnerSchema, "params"),
  validatorHandler(updateOwnerSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedOwner = await ownerService.updateOwner(id, data);
      res.status(200).json(updatedOwner);
    } catch (error) {
      next(error);
    }
  }
);

ownerRouter.delete(
  "/:id",
  validatorHandler(getOwnerSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedOwner = await ownerService.deleteOwner(id);
      res.status(200).json(deletedOwner);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = ownerRouter;
