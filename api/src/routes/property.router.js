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
