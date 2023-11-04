const Profile = require("./models/profile.model");
const User = require("./models/user.model");

const associations = () => {
  User.hasOne(Profile, {
    foreignKey: {
      field: "userId",
      allowNull: false,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  Profile.belongsTo(User, {
    foreignKey: {
      field: "userId",
      allowNull: false,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
};

module.exports = associations;
