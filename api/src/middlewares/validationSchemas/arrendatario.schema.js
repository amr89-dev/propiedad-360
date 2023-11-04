const Joi = require("joi");

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(50);
const last_name = Joi.string().min(3).max(50);
const id_number = Joi.string().min(3).max(50);
const phone = Joi.string().min(3).max(50);
const contact_name = Joi.string().min(3).max(50);
const contact_address = Joi.string().min(3).max(50);

const createArrendatarioSchema = Joi.object({
  name: name.required(),
  last_name: last_name.required(),
  id_number: id_number.required(),
  phone: phone.required(),
  contact_name: contact_name.required(),
  contact_address: contact_address.required(),
});

const updateArrendatarioSchema = Joi.object({
  name,
  last_name,
  id_number,
  phone,
  contact_name,
  contact_address,
});

const getArrendatarioSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  getArrendatarioSchema,
  createArrendatarioSchema,
  updateArrendatarioSchema,
};
