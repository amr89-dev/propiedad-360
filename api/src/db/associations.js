const User = require("./models/user.model");
const RealEstate = require("./models/real_estate.model");
const Owner = require("./models/owner.model");
const Tenant = require("./models/tenant.model");
const Property = require("./models/property.model");
const Token = require("./models/token.model");

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
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  RealEstate.hasMany(Tenant, {
    foreignKey: {
      field: "realEstateId",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  RealEstate.hasMany(Property, {
    foreignKey: {
      field: "realEstateId",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Tenant.belongsTo(RealEstate, {
    foreignKey: {
      field: "realEstateId",
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
  Tenant.hasMany(Property, {
    foreignKey: {
      field: "tenantId",
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
      field: "ownerId",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Owner.belongsToMany(RealEstate, {
    through: "OwnerRealEstate",
    foreignKey: "ownerId",
    otherKey: "realEstateId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Property.belongsTo(Tenant, {
    foreignKey: {
      field: "tenantId",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Property.belongsTo(Owner, {
    foreignKey: {
      field: "ownerId",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Token.belongsTo(User, {
    foreignKey: {
      field: "userId",
      allowNull: false,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  User.hasOne(Token, {
    foreignKey: {
      field: "userId",
      allowNull: false,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
};

module.exports = associations;
