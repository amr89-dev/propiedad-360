const express = require("express");
const passport = require("passport");
const authRouter = express.Router();
const TokenService = require("../services/token.service.js");
const tokenService = new TokenService();
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/tokenGenerator.js");

authRouter.post(
  "/",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
        role: user.role,
      };

      const accessToken = generateAccessToken(payload);
      const refreshToken = generateRefreshToken(payload);

      await tokenService.createToken(refreshToken, user.id);
      res.json({ user, accessToken, refreshToken });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = authRouter;
