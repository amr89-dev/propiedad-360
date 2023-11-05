const express = require("express");
const ownerRouter = express.Router();
const OwnerService = require("../services/owner.service.js");
const ownerService = new OwnerService();
const validatorHandler = require("../middlewares/validator.handler.js");
