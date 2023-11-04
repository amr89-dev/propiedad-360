const db = require("../db");
const { DataTypes } = require("sequelize");

const Profile = db.define("profile", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Profile;
