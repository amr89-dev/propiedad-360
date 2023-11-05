const Joi = require("joi");
const { createUserSchema } = require("./user.schema");

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30);
const last_name = Joi.string().min(3).max(30);
const id_number = Joi.string().min(3).max(30);
const phone = Joi.string().min(3).max(30);
const address = Joi.string().min(3).max(30);
const user = createUserSchema;
const real_estates = Joi.array().items(Joi.string().uuid());

const createOwnerSchema = Joi.object({
  name: name.required(),
  last_name: last_name.required(),
  id_number: id_number.required(),
  phone: phone.required(),
  address: address.required(),
  user: user.required(),
  real_estates: real_estates,
});

const updateOwnerSchema = Joi.object({
  name,
  last_name,
  id_number,
  phone,
  address,
  real_estates,
});

const getOwnerSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createOwnerSchema,
  updateOwnerSchema,
  getOwnerSchema,
};
