const { DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: db.Sequelize.ENUM("admin", "user"),
    defaultValue: "user",
  },
});

module.exports = User;
