const bcrypt = require("bcryptjs");
const { Sequelize, DataTypes } = require("sequelize/types");

function userCreate() {
  let Registered = sequelize.define("Registered", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isUsername: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Registered.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password);
  };
  Registered.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return Registered;
}

module.exports = userCreate;
