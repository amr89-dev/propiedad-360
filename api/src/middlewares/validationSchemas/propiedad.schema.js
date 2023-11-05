const Joi = require("joi");

const id = Joi.string().uuid();
const address = Joi.string();
const rent = Joi.number();
const status = Joi.string();
const images = Joi.array();
const description = Joi.string();

const createPropertySchema = Joi.object({
  address: address.required(),
  rent: rent.required(),
  status: status.required(),
  images,
  description,
});

const updatePropertySchema = Joi.object({
  address,
  rent,
  status,
  images,
  description,
});

const getPropertySchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createPropertySchema,
  updatePropertySchema,
  getPropertySchema,
};