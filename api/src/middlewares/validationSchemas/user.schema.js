const Joi = require("joi");

const id = Joi.string().uuid();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5);
const status = Joi.string().valid("active", "inactive");

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role,
  status,
});

const updateUserSchema = Joi.object({
  password,
  role,
  status,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
