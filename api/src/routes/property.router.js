const express = require("express");
const propertyRouter = express.Router();
const PropertyService = require("../services/property.service.js");
const propertyService = new PropertyService();
const validatorHandler = require("../middlewares/validator.handler");
const {
  createPropertySchema,
  updatePropertySchema,
  getPropertySchema,
} = require("../middlewares/validationSchemas/propiedad.schema");

propertyRouter.get("/", async (req, res, next) => {
  try {
    const properties = await propertyService.getAll();
    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
});

propertyRouter.get(
  "/:id",
  validatorHandler(getPropertySchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const property = await propertyService.getById(id);
      res.status(200).json(property);
    } catch (error) {
      next(error);
    }
  }
);

propertyRouter.post(
  "/",
  validatorHandler(createPropertySchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProperty = await propertyService.create(body);
      res.status(201).json(newProperty);
    } catch (error) {
      next(error);
    }
  }
);

propertyRouter.put(
  "/:id",
  validatorHandler(getPropertySchema, "params"),
  validatorHandler(updatePropertySchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updatedProperty = await propertyService.update(id, body);
      res.status(200).json(updatedProperty);
    } catch (error) {
      next(error);
    }
  }
);

propertyRouter.delete(
  "/:id",
  validatorHandler(getPropertySchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedProperty = await propertyService.delete(id);
      res.status(200).json(deletedProperty);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = propertyRouter;
