const db = require("../db");
const { DataTypes } = require("sequelize");

const Arrendatario = db.define("arrendatario", {
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
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Arrendatario;
