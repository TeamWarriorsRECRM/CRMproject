const bcrypt = require("bcryptjs");
// const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  User.prototype.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password);
  };
  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
