const express = require("express");
const arrendatarioRouter = express.Router();
const Arrendatario = require("../db/models/tenant.model.js");

const validatorHandler = require("../middlewares/validator.handler.js");
const {
  getArrendatarioSchema,
  createArrendatarioSchema,
  updateArrendatarioSchema,
} = require("../middlewares/validationSchemas/arrendatario.schema.js");

arrendatarioRouter.get("/", async (req, res, next) => {
  try {
    const arrendatarios = await Arrendatario.findAll();
    res.status(200).json(arrendatarios);
  } catch (err) {
    next(err);
  }
});

arrendatarioRouter.post(
  "/",
  validatorHandler(createArrendatarioSchema, "body"),
  async (req, res, next) => {
    try {
      const newArrendatario = await Arrendatario.create(req.body);
      res.status(200).json(newArrendatario);
    } catch (err) {
      next(err);
    }
  }
);

arrendatarioRouter.get(
  "/:id",
  validatorHandler(getArrendatarioSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const arrendatario = await Arrendatario.findByPk(id);
      res.status(200).json(arrendatario);
    } catch (err) {
      next(err);
    }
  }
);

arrendatarioRouter.put(
  "/:id",
  validatorHandler(getArrendatarioSchema, "params"),
  validatorHandler(updateArrendatarioSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const arrendatario = await Arrendatario.update(req.body, {
        where: { id },
      });
      res.status(200).json(arrendatario);
    } catch (err) {
      next(err);
    }
  }
);

arrendatarioRouter.delete(
  "/:id",
  validatorHandler(getArrendatarioSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await Arrendatario.destroy({ where: { id } });
      res.status(200).json({ message: "Arrendatario deleted" });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = arrendatarioRouter;
