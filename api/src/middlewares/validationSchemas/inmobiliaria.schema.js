const Joi = require("joi");
const { createUserSchema } = require("./user.schema");

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(50);
const address = Joi.string().min(3).max(50);
const contact_name = Joi.string().min(3).max(50);
const phone = Joi.string().min(3).max(50);
const user = createUserSchema;

const createInmobiliariaSchema = Joi.object({
  name: name.required(),
  address: address.required(),
  contact_name: contact_name.required(),
  phone: phone.required(),
  user: user.required(),
});

const updateInmobiliariaSchema = Joi.object({
  name,
  address,
  contact_name,
  phone,
  user,
});

const getInmobiliariaSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createInmobiliariaSchema,
  updateInmobiliariaSchema,
  getInmobiliariaSchema,
};
