const Joi = require("joi");

const id = Joi.string().uuid();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role,
});

const updateUserSchema = Joi.object({
  password,
  role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
