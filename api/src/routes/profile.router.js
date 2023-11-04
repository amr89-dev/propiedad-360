const express = require("express");
const profileRouter = express.Router();
const ProfileService = require("./../services/profile.service");
const profileService = new ProfileService();
const validatorHandler = require("./../middlewares/validator.handler");

profileRouter.get("/", async (req, res, next) => {
  try {
    const profile = await profileService.getProfile();
    res.status(200).json(profile);
  } catch (err) {
    next(err);
  }
});

profileRouter.post("/", validatorHandler(""), async (req, res, next) => {
  try {
    const profile = await profileService.createProfile();
    res.status(201).json(profile);
  } catch (err) {
    next(err);
  }
});

module.exports = profileRouter;
