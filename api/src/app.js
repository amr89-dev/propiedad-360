const express = require("express");
const cors = require("cors");
const routerApi = require("./routes/index");
const {
  errorLogger,
  ormErrorHandler,
  boomErrorHandler,
  errorHandler,
} = require("./middlewares/error.handler");

const createServer = () => {
  const app = express();

  app.use(express.json());
  const ACCEPTED_ORIGINS = ["http://localhost:5173", "http://localhost:3001"];
  const corsOptions = {
    origin: (origin, callback) => {
      if (!origin || ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
  };
  app.use(cors(corsOptions));
  require("./utils/auth/index");
  routerApi(app);

  app.use(errorLogger);
  app.use(ormErrorHandler);
  app.use(boomErrorHandler);
  app.use(errorHandler);

  return app;
};

module.exports = createServer;
