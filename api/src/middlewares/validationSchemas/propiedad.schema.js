const Joi = require("joi");

const id = Joi.string().uuid();
const address = Joi.string();
const rent = Joi.number().integer().min(0);
const status = Joi.string().valid(
  "disponible",
  "rentado",
  "reservado",
  "remodelacion"
);
const images = Joi.array();
const description = Joi.string();
const type = Joi.string().valid("casa", "apartamento", "room");
const rooms = Joi.number().integer().min(0);
const bathrooms = Joi.number().integer().min(0);

const createPropertySchema = Joi.object({
  address: address.required(),
  rent: rent.required(),
  status: status.required(),
  type: type.required(),
  images,
  description,
  rooms,
  bathrooms,
});

const updatePropertySchema = Joi.object({
  address,
  type,
  rent,
  status,
  images,
  description,
  rooms,
  bathrooms,
});

const getPropertySchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createPropertySchema,
  updatePropertySchema,
  getPropertySchema,
};
