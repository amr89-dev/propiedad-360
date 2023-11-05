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
  RealEstate.belongsToMany(Owner, {
    through: "OwnerRealEstate",
    foreignKey: "realEstateId",
    otherKey: "ownerId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  RealEstate.belongsToMany(Tenant, {
    through: "TenantRealEstate",
    foreignKey: "realEstateId",
    otherKey: "tenantId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  Tenant.belongsToMany(RealEstate, {
    through: "TenantRealEstate",
    foreignKey: "tenantId",
    otherKey: "realEstateId",
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
      field: "ownerId",
      allowNull: false,
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
      allowNull: false,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Property.belongsTo(Owner, {
    foreignKey: {
      field: "ownerId",
      allowNull: false,
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
