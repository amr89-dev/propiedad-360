const express = require("express");
const realEstateRouter = express.Router();
const RealEstateService = require("../services/realEstate.service");
const realEstateService = new RealEstateService();
const validatorHandler = require("../middlewares/validator.handler");
const {
  createInmobiliariaSchema,
  updateInmobiliariaSchema,
  getInmobiliariaSchema,
} = require("../middlewares/validationSchemas/inmobiliaria.schema");

realEstateRouter.get("/", async (req, res, next) => {
  try {
    const inmobiliaria = await realEstateService.getRealEstate();
    res.status(200).json(inmobiliaria);
  } catch (err) {
    next(err);
  }
});

realEstateRouter.post(
  "/",
  validatorHandler(createInmobiliariaSchema, "body"),
  async (req, res, next) => {
    try {
      const inmobiliaria = await realEstateService.createRealEstate(req.body);
      res.status(201).json(inmobiliaria);
    } catch (err) {
      next(err);
    }
  }
);
realEstateRouter.get(
  "/:id",
  validatorHandler(getInmobiliariaSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const inmobiliaria = await realEstateService.getRealEstateById(id);
      res.status(200).json(inmobiliaria);
    } catch (err) {
      next(err);
    }
  }
);

realEstateRouter.put(
  "/:id",
  validatorHandler(getInmobiliariaSchema, "params"),
  validatorHandler(updateInmobiliariaSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const inmobiliaria = await realEstateService.updateRealEstate(
        id,
        req.body
      );
      res.status(200).json(inmobiliaria);
    } catch (err) {
      next(err);
    }
  }
);

realEstateRouter.delete(
  "/:id",
  validatorHandler(getInmobiliariaSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const inmobiliaria = await realEstateService.deleteRealEstate(id);
      res.status(200).json(inmobiliaria);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = realEstateRouter;
