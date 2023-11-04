const User = require("./models/user.model");
const RealEstate = require("./models/real_estate.model");
const Owner = require("./models/owner.model");
const Tenant = require("./models/tenant.model");
const Property = require("./models/property.model");

const associations = () => {
  RealEstate.belongsTo(User, {
    foreignKey: {
      field: "userId",
      allowNull: false,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  RealEstate.hasMany(Owner, {
    foreignKey: {
      field: "realEstateId",
      allowNull: false,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  RealEstate.hasMany(Tenant, {
    foreignKey: {
      field: "realEstateId",
      allowNull: false,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Owner.belongsTo(User, {
    foreignKey: {
      field: "userId",
      allowNull: false,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Owner.hasMany(Property, {
    foreignKey: {
      field: "arrendadorId",
      allowNull: false,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Tenant.belongsTo(User, {
    foreignKey: {
      field: "userId",
      allowNull: false,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Property.belongsTo(Owner, {
    foreignKey: {
      field: "arrendadorId",
      allowNull: false,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
};

module.exports = associations;
