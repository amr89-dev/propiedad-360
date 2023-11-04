const express = require("express");
const realStateRouter = express.Router();
const RealEstateService = require("../services/realEstate.service");
const realEstateService = new RealEstateService();
const validatorHandler = require("../middlewares/validator.handler");
const {
  createInmobiliariaSchema,
  updateInmobiliariaSchema,
  getInmobiliariaSchema,
} = require("../middlewares/validationSchemas/inmobiliaria.schema");

realStateRouter.get("/", async (req, res, next) => {
  try {
    const inmobiliaria = await realEstateService.getProfile();
    res.status(200).json(inmobiliaria);
  } catch (err) {
    next(err);
  }
});

realStateRouter.post(
  "/",
  validatorHandler(createInmobiliariaSchema, "body"),
  async (req, res, next) => {
    try {
      const inmobiliaria = await realEstateService.createProfile(req.body);
      res.status(201).json(inmobiliaria);
    } catch (err) {
      next(err);
    }
  }
);
realStateRouter.get(
  "/:id",
  validatorHandler(getInmobiliariaSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const inmobiliaria = await realEstateService.getProfileById(id);
      res.status(200).json(inmobiliaria);
    } catch (err) {
      next(err);
    }
  }
);

realStateRouter.put(
  "/:id",
  validatorHandler(getInmobiliariaSchema, "params"),
  validatorHandler(updateInmobiliariaSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const inmobiliaria = await realEstateService.updateProfile(id, req.body);
      res.status(200).json(inmobiliaria);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = realStateRouter;
